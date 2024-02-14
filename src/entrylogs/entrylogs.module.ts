import { Module } from '@nestjs/common';
import { EntrylogsService } from './entrylogs.service';
import { EntrylogsController } from './entrylogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entrylog } from './entities/entrylog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entrylog])],
  controllers: [EntrylogsController],
  providers: [EntrylogsService],
})
export class EntrylogsModule {}
