import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_project';
  log: boolean = false;

  constructor(private router: Router) {
    this.checkUserRole();
  }

  checkUserRole() {
    this.log = localStorage.getItem('userRole') !== null;
  }

  logout() {
    localStorage.removeItem('userRole');
    this.checkUserRole();
    this.router.navigate(['/login']);
  }
}
