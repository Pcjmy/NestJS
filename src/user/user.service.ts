import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Logs } from '../logs/logs.entity';
import { getUserDto } from './dto/get-user.dto';
import { conditionUtils } from '../utils/db.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Logs) private readonly logsRepository: Repository<Logs>,
  ) {}

  findAll(query: getUserDto) {
    const { limit, page, username, gender, role } = query;
    const take = limit || 10;
    const skip = ((page || 1) - 1) * take;

    let obj = {
      'user.username': username,
      'profile.gender': gender,
      'roles.id': role,
    };
    // inner join vs left join vs outer join
    const queryBuilder = this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.profile', 'profile')
      .leftJoinAndSelect('user.roles', 'roles');
    const newQuery = conditionUtils<User>(queryBuilder, obj);
    // if (gender) {
    //   queryBuilder.andWhere('profile.gender = :gender', { gender });
    // } else {
    //   queryBuilder.andWhere('profile.gender IS NOT NULL');
    // }
    // if (role) {
    //   queryBuilder.andWhere('roles.id = :role', { role });
    // } else {
    //   queryBuilder.andWhere('roles.id IS NOT NULL');
    // }

    return (
      newQuery
        .take(take)
        .skip(skip)
        // .andWhere('profile.gender = :gender', { gender })
        // .andWhere('roles.id = :role', { role })
        .getMany()
    );
  }

  find(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: User) {
    const userTmp = await this.userRepository.create(user);
    return this.userRepository.save(userTmp);
  }

  async update(id: number, user: Partial<User>) {
    return this.userRepository.update(id, user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  findProfile(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      },
      relations: {
        profile: true,
      },
    });
  }

  async findUserLogs(id: number) {
    const user = await this.findOne(id);
    return this.logsRepository.find({
      where: {
        user,
      },
      relations: {
        user: true,
      },
    });
  }

  findLogsByGroup(id: number) {
    return this.logsRepository.query('SELECT * FROM logs');
    // return this.logsRepository
    //   .createQueryBuilder('logs')
    //   .select('logs.result', 'result')
    //   .addSelect('COUNT("logs.result")', 'count')
    //   .leftJoinAndSelect('logs.user', 'user')
    //   .where('user.id = :id', { id })
    //   .groupBy('logs.result')
    //   .orderBy('result', 'DESC')
    //   .getRawMany();
  }
}
