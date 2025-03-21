import { Global, Module, Logger } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigEnum } from './enum/config.enum';
import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import { User } from './user/user.entity';
import { Profile } from './user/profile.entity';
import { Logs } from './logs/logs.entity';
import { Roles } from './roles/roles.entity';
import { LogsModule } from './logs/logs.module';

const envFilePath = `.env.${process.env.NODE_ENV || `development`}`;

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      load: [() => dotenv.config({ path: '.env' })],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        DB_PORT: Joi.number().default(3306),
        DB_HOST: Joi.string().ip(),
        DB_TYPE: Joi.string().valid('mysql', 'postgres'),
        DB_DATABASE: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_SYNC: Joi.boolean().default(false),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get(ConfigEnum.DB_TYPE),
          // 加这个配置报错，先注释掉
          // ERROR [TypeOrmModule] Unable to connect to the database. Retrying (1)...
          // Error: Access denied for user 'root'@'localhost' (using password: YES)
          // host: configService.get(ConfigEnum.DB_HOST),
          port: configService.get(ConfigEnum.DB_PORT),
          username: configService.get(ConfigEnum.DB_USERNAME),
          password: configService.get(ConfigEnum.DB_PASSWORD),
          database: configService.get(ConfigEnum.DB_DATABASE),
          entities: [User, Profile, Logs, Roles],
          // 同步本地的schema与数据库 -> 初始化的时候去使用
          synchronize: configService.get(ConfigEnum.DB_SYNC),
          // SQL语句调试
          logging: process.env.NODE_ENV === 'development',
          // logging: false,
        }) as TypeOrmModuleOptions,
    }),
    UserModule,
    LogsModule,
  ],
  controllers: [],
  providers: [Logger],
  exports: [Logger],
})
export class AppModule {}
