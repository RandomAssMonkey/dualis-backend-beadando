import {Injectable, NotFoundException} from '@nestjs/common';
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
  },];
  generateId(): number{
    return Math.random();
  }

  findIndex(id: number): number{
    const index: number = this.books.findIndex(book => book.id === id);
    if(index === (-1)){
      throw new NotFoundException();
    }else{
      return index;
    }
  }

  create(createBookDto: CreateBookDto): {message: string} {
    const id: number = this.generateId();
    const release: Date = new Date(Number(createBookDto.release_year), Number(createBookDto.release_month), Number(createBookDto.release_day));
    const book: BookDto = {id: id, title: createBookDto.title, writer: createBookDto.writer, release_date: release};
    if (this.books.push(book)){
      return {message: 'Creation successful!'};
    }else{
      throw new Error('There was an Error during creating books!');
    }

  }

  findAll(): BookDto[] {
    return this.books;
  }

  findOne(id: number): BookDto {
    const index: number = this.findIndex(id);
    return this.books[index];
  }

  update(id: number, updateBookDto: UpdateBookDto): {message: string} {
    const index: number = this.findIndex(id);
    const upDate: Date = new Date(Number(updateBookDto.release_year), Number(updateBookDto.release_month), Number(updateBookDto.release_day));
    const updateBook: BookDto = {id: this.books[index].id, title: updateBookDto.title, writer: updateBookDto.writer, release_date: upDate};
    if ((this.books[index] = updateBook)) {
      return {message: 'Update Successful!'};
    } else {
      throw new Error('There was an Error during updating books!');
    }
  }

  delete(id: number): {message: string} {
    const index: number = this.findIndex(id);
    if(this.books.splice(index, 1)){
      return { message: 'Resource deleted successfully!'};
    } else {
      throw new Error('There was an Error during deleting books!');
    }
  }
}
