import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { RegisteredComponent } from './registered/registered.component';
import { NoValidComponent } from './no-valid/no-valid.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'lesson', component: LessonListComponent },
    { path: 'registered', component: RegisteredComponent },
    { path: '**', component: NoValidComponent }
];
