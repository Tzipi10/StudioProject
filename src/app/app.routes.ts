import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';
import { RegisteredComponent } from './components/registered/registered.component';
import { NoValidComponent } from './components/no-valid/no-valid.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { teacherGuard} from './guards/teacher.guard';
import { secretaryGuard } from './guards/secretary.guard';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'lessons', component: LessonListComponent, canActivate: [teacherGuard]},
    { path: 'registereds', component: RegisteredComponent, canActivate:[secretaryGuard] },
     {path: 'lessons/:id', component: LessonDetailsComponent },
    { path: '**', component: NoValidComponent }
];
