import { Injectable } from '@nestjs/common';
import { CreateEntrylogDto } from './dto/create-entrylog.dto';
import { UpdateEntrylogDto } from './dto/update-entrylog.dto';

@Injectable()
export class EntrylogsService {
  create(createEntrylogDto: CreateEntrylogDto) {
    return 'This action adds a new entrylog';
  }

  findAll() {
    return `This action returns all entrylogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entrylog`;
  }

  update(id: number, updateEntrylogDto: UpdateEntrylogDto) {
    return `This action updates a #${id} entrylog`;
  }

  remove(id: number) {
    return `This action removes a #${id} entrylog`;
  }
}
