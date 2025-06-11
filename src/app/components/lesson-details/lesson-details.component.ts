import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonsService } from '../../services/lessons/lessons.service';
import { Lesson } from '../../types/lesson';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson-details',
  imports: [CommonModule],
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css']
})
export class LessonDetailsComponent implements OnInit {
  lesson: Lesson | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lessonsService: LessonsService,
    private title: Title
  ) {}

 ngOnInit() {
  const lessonId = this.route.snapshot.paramMap.get('id');
  if (lessonId) {
    this.lesson = this.lessonsService.getLessonById(+lessonId);
  }
  this.title.setTitle('Lesson details');
}


  goBack() {
    this.router.navigate(['/lessons']);
  }
}
