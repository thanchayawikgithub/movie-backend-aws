import { PartialType } from '@nestjs/mapped-types';
import { CreateEntrylogDto } from './create-entrylog.dto';

export class UpdateEntrylogDto extends PartialType(CreateEntrylogDto) {}
