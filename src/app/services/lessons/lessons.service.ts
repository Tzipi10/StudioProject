import { Injectable } from '@angular/core';
import { Days } from '../../enums/days';
import { Lesson } from '../../types/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor() { }

  lessons: Lesson[] = [
    {
      lessonName: "Yoga",
      teacherName: "Anna Smith",
      numLessons: 10,
      startDate: new Date('2023-10-01'),
      price: 150,
      day: Days.Monday,
      hour: "18:00"
    },
    {
      lessonName: "Pilates",
      teacherName: "John Doe",
      numLessons: 8,
      startDate: new Date('2023-10-05'),
      price: 120,
      day: Days.Wednesday,
      hour: "19:00"
    },
    {
      lessonName: "Zumba",
      teacherName: "Emily Johnson",
      numLessons: 12,
      startDate: new Date('2023-10-10'),
      price: 180,
      day: Days.Friday,
      hour: "10:00"
    },
    {
      lessonName: "Women's Sports Class",
      teacherName: "Miriam Cohen",
      numLessons: 8,
      startDate: new Date('2023-10-05'),
      price: 100,
      day: Days.Sunday,
      hour: "10:00"
    },
    {
      lessonName: "Line Dance Class",
      teacherName: "Rivka Friedman",
      numLessons: 10,
      startDate: new Date('2023-10-02'),
      price: 120,
      day: Days.Monday,
      hour: "17:00"
    },
    {
      lessonName: "Private Swimming Lessons",
      teacherName: "Yossi Levi",
      numLessons: 6,
      startDate: new Date('2023-10-03'),
      price: 150,
      day: Days.Tuesday,
      hour: "15:00"
    },
    {
      lessonName: "Women's Fitness Class",
      teacherName: "Sarah Weiss",
      numLessons: 12,
      startDate: new Date('2023-10-12'),
      price: 130,
      day: Days.Thursday,
      hour: "16:00"
    }
  ];

  getUsers() {
    return this.lessons;
  }
}
