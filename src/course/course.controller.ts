import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor( private courseService: CourseService) {}

    // get user data
    // url: localhost:3000/course/get/:id
    // :id must replace by the id of target course
    @Get('get/:id')
    getCourse(@Param('id', ParseIntPipe) id: number){
        return this,this.courseService.getCourse(id);
    }
}
