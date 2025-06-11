import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-no-valid',
  standalone: true,
  imports: [],
  templateUrl: './no-valid.component.html',
  styleUrl: './no-valid.component.css'
})
export class NoValidComponent {
 constructor(private title: Title) {
    this.title.setTitle('No valid');
  }
}
