import { Component } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { Book } from 'src/app/models/book';
import { NgFor } from '@angular/common';
import { Gender, Person } from 'src/app/models/person';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, BookComponent, PersonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  person1: Person = {
    age: 23,
    height: 158,
    name: 'David',
    gender: Gender.MALE,
    alive: true
  }

  listOfPersons: Person[] = [
    {
      age: 25,
      height: 188,
      name: "Palo Scerba",
      gender: Gender.MALE,
      alive: true

    },
    {
      age: 17,
      height: 160,
      name: "Anna Frankova",
      gender: Gender.FEMALE,
      alive: true

    }, {
      age: 22,
      height: 192,
      name: "Vojech Conka",
      gender: Gender.MALE,
      alive: true

    }
  ];

  listOfBooks: Book[] = [
    {
      id: 1,
      author: 'F. Scott Fitzgerald',
      title: 'The Great Gatsby',
      genre: 'Fiction',
      available: true,
      year: 1925
    },
    {
      id: 2,
      author: 'George Orwell',
      title: '1984',
      genre: 'Dystopian Fiction',
      available: true,
      year: 1949
    },
    {
      id: 3,
      author: 'Harper Lee',
      title: 'To Kill a Mockingbird',
      genre: 'Southern Gothic Fiction',
      available: false,
      year: 1960
    }
  ];
}
