import {Days} from '../enums/days'
export type Lesson = {
    lessonName:String,
    teacherName:String,
    numLessons:Number,
    startDate:Date,
    price:Number,
    day:Days,
    hour:String
}