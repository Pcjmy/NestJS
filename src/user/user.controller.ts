import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get()
  getUsers(): any {
    const data = this.configService.get('db');
    console.log(data);
    return this.userService.getUsers();
  }
}
