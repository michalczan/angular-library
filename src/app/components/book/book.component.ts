import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgIf, MatButtonModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule ,MatCardModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book!: Book;
  inputText: string = '';

  reserve() {
    this.book.available = false;
  }
}