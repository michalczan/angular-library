import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person',
  standalone: true,
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() personInput!: Person;
}