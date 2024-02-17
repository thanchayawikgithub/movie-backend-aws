import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShowtimeSeatsService } from './showtime_seats.service';
import { CreateShowtimeSeatDto } from './dto/create-showtime_seat.dto';
import { UpdateShowtimeSeatDto } from './dto/update-showtime_seat.dto';

@Controller('showtime-seats')
export class ShowtimeSeatsController {
  constructor(private readonly showtimeSeatsService: ShowtimeSeatsService) {}

  @Post()
  create(@Body() createShowtimeSeatDto: CreateShowtimeSeatDto) {
    return this.showtimeSeatsService.create(createShowtimeSeatDto);
  }

  @Post('/createAll')
  createAll() {
    return this.showtimeSeatsService.createAll();
  }

  @Get()
  findAll() {
    return this.showtimeSeatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.showtimeSeatsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShowtimeSeatDto: UpdateShowtimeSeatDto,
  ) {
    return this.showtimeSeatsService.update(+id, updateShowtimeSeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.showtimeSeatsService.remove(+id);
  }
}
