import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: "Jithin",
      place: "Ekm"
    }
  ]
  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
    // return `This action returns all users`;
  }

  findOne(id: number) {
    return this.users.find(user=>user.id===id)
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let objIndex = this.users.findIndex((obj) => obj.id===id);
    this.users[objIndex] = updateUserDto;
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.users = this.users.filter((item)=> {return item.id !==id})
    return `This action removes a #${id} user`;
  }
}
