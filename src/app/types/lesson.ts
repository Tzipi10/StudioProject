import {Days} from '../enums/days'
export type Lesson = {
    id: number,
    lessonName:String,
    teacherName:String,
    numLessons:number,
    startDate:Date,
    price:number,
    day:Days,
    hour:String
}