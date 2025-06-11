import { Component, HostListener } from '@angular/core';
import { LessonsService } from '../../services/lessons/lessons.service';
import { Router } from '@angular/router';
import { Lesson } from '../../types/lesson';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule, NgFor } from '@angular/common';
import { Days } from '../../enums/days';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson-list',
  imports: [MatGridListModule, NgFor, CommonModule],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.css',
  providers: [LessonsService],
})
export class LessonListComponent {
  lessons: Lesson[];
  Days = Days;
  constructor(
    public router: Router,
    private LessonsService: LessonsService,
    private title: Title
  ) {
    this.lessons = this.LessonsService.getLessons();
  }

  gridCols = 4;

  @HostListener('window:resize', ['$event'])
  onResize() {
    const width = window.innerWidth;
    if (width > 1200) {
      this.gridCols = 4;
    } else if (width > 900) {
      this.gridCols = 3;
    } else if (width > 600) {
      this.gridCols = 2;
    } else {
      this.gridCols = 1;
    }
  }

  ngOnInit() {
    this.onResize();
      this.title.setTitle('Lesson list');

  }

  goToDetails(lessonId: number) {
    this.router.navigate(['/lessons', lessonId]);
  }

  hasStarted(lesson: Lesson): boolean {
    const today = new Date();
    return new Date(lesson.startDate) <= today;
  }
}
