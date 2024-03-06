import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import {BookDto} from "./dto/book.dto";

@Injectable()
export class BooksService {
  books: BookDto[] = [{
    id: 0,
    title: 'Harry Potter in the Chamber of Secrets',
    writer: 'J. K. Rowling',
    release_date: new Date(1998,7,2),
  },{
    id: 1,
    title: 'Lord of the Rings the Fellowship of the Ring',
    writer: 'J. R. R. Tolkien',
    release_date: new Date(1954,7,29),
  },]
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll(): BookDto[] {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
