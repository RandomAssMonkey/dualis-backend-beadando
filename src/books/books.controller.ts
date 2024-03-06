import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {BookDto} from "./dto/book.dto";

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @HttpCode(201)
  @Post()
  create(@Body() createBookDto: CreateBookDto): {message: string} {
    return this.booksService.create(createBookDto);
  }

  @HttpCode(200)
  @Get()
  findAll(): BookDto[] {
    return this.booksService.findAll();
  }

  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: string): BookDto {
    return this.booksService.findOne(Number(id));
  }

  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): {message: string} {
    return this.booksService.update(Number(id), updateBookDto);
  }

  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id') id: string): {message: string} {
    return this.booksService.delete(Number(id));
  }
}
