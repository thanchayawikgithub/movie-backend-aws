import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntrylogsService } from './entrylogs.service';
import { CreateEntrylogDto } from './dto/create-entrylog.dto';
import { UpdateEntrylogDto } from './dto/update-entrylog.dto';

@Controller('entrylogs')
export class EntrylogsController {
  constructor(private readonly entrylogsService: EntrylogsService) {}

  @Post()
  create(@Body() createEntrylogDto: CreateEntrylogDto) {
    return this.entrylogsService.create(createEntrylogDto);
  }

  @Get()
  findAll() {
    return this.entrylogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entrylogsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEntrylogDto: UpdateEntrylogDto,
  ) {
    return this.entrylogsService.update(+id, updateEntrylogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entrylogsService.remove(+id);
  }
}
