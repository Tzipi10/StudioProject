import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registered-details',
  imports: [],
  templateUrl: './registered-details.component.html',
  styleUrl: './registered-details.component.css',
})
export class RegisteredDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
