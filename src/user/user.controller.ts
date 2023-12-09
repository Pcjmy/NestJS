import {
  Controller,
  Get,
  Post,
  Logger,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { User } from './user.entity';
import { getUserDto } from './dto/get-user.dto';

@Controller('user')
export class UserController {
  // private logger = new Logger(UserController.name);

  constructor(
    private userService: UserService,
    private configService: ConfigService,
    private logger: Logger,
  ) {
    this.logger.log('UserController init');
  }

  @Get('/profile')
  getUserProfile(@Query('id') query: any): any {
    console.log(
      '🚀 ~ file: user.controller.ts:29 ~ UserController ~ getUserProfile ~ query:',
      query,
    );
    return this.userService.findProfile(2);
  }

  @Get('/:id')
  getUser(): any {
    return 'hello world';
  }

  @Get()
  getUsers(@Query() query: getUserDto): any {
    console.log(
      '🚀 ~ file: user.controller.ts:51 ~ UserController ~ getUsers ~ query:',
      query,
    );
    return this.userService.findAll(query);
  }

  @Post()
  addUser(@Body() dto: any): any {
    console.log(
      '🚀 ~ file: user.controller.ts:36 ~ UserController ~ addUser ~ dto:',
      dto,
    );
    const user = { username: 'zhangsan', password: '123456' } as User;
    return this.userService.create(user);
  }

  @Patch('/:id')
  updateUser(@Body() dto: any, @Param('id') id: number): any {
    const user = dto as User;
    return this.userService.update(id, user);
  }

  @Get('/logs')
  getUserLogs(): any {
    return this.userService.findUserLogs(2);
  }

  @Get('/logsByGroup')
  async getLogsByGroup(): Promise<any> {
    const res = await this.userService.findLogsByGroup(2);
    return res.map((o) => ({
      result: o.result,
      count: o.count,
    }));
  }
}
