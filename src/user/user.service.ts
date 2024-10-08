import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: Repository<User>
    ) { }

    public async create(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    public async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    public async findOne(id: string): Promise<User> {
        return this.userRepository.findOne({ where: { id: id } });
    }

    public async remove(id: string) {
        let a = await this.userRepository.findOne({ where: { id: id } })
        await this.userRepository.remove(a);
    }
}
