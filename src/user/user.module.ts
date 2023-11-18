import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Logs } from 'src/logs/logs.entity';
import { LoggerModule } from 'nestjs-pino';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Logs]),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          targets: [
            {
              level: 'info',
              target: 'pino-pretty',
              options: {
                colorize: true,
              },
            },
            {
              level: 'info',
              target: 'pino-roll',
              options: {
                file: join('logs', 'log.txt'),
                frequency: 'daily',
                size: '10m',
                mkdir: true,
              },
            },
          ],
        },
        // transport:
        //   process.env.NODE_ENV === 'development'
        //     ? {
        //         target: 'pino-pretty',
        //         options: {
        //           colorize: true,
        //         },
        //       }
        //     : {
        //         target: 'pino-roll',
        //         options: {
        //           file: 'log.txt',
        //           frequency: 'daily',
        //           mkdir: true,
        //         },
        //       },
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
