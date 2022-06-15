import { Body, Controller, Delete, Get, Headers, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import { addEnrollmentDto, queryCourseDto, queryEnrollmentDto, queryUserDto } from './dto';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {
    constructor( private enrollService: EnrollmentService) {}

    // query user data by courseId
    // url: localhost:3000/enrollment/queryUser?courseId=
    @Get('queryUser')
    queryCourseUser(@Query() dto: queryUserDto){
        return this.enrollService.queryCourseUser(Number(dto.courseId));
    }

    // add new enrollment with given userId, courseid and role
    // url: localhost:3000/enrollment/add
    // submited userId, courseId and role carry by HTML Req Body
    @Post('add')
    addEnrollment(
        @Headers() headers: {},
        @Body() dto: addEnrollmentDto){
        return this.enrollService.addEnroll(dto, headers);
    }

    // delete enrollment by id
    // url: localhost:3000/enrollment/delete/:id
    // :id must replace by the id of target enrollment
    @Delete('delete/:id')
    deleteEnrollment(
        @Headers() headers: {},
        @Param('id', ParseIntPipe) id: number){
        return this.enrollService.deleteEnroll(id,headers);
    }

    // get enrollment data by id
    // url: localhost:3000/enrollment/get/:id
    // :id must replace by the id of target enrollment
    @Get('get/:id')
    getEnrollment(@Param('id', ParseIntPipe) id: number){
        return this.enrollService.getEnroll(id);
    }

    // query enrollment by userId, courseId or role
    // url: localhost:3000/enrollment/queryEnroll?userId= &courseId= &role=
    // use userId, courseId and role as query parameter
    @Get('queryEnroll')
    queryEnrollment(@Query() dto: queryEnrollmentDto){
        return this.enrollService.queryEnroll(dto);
    }

    // query course data by userId
    // url: localhost:3000/enrollment/queryCourrse?userId=
    @Get('queryCourse')
    queryUserCourse(@Query() dto: queryCourseDto ){
        return this.enrollService.queryUserCourse(Number(dto.userId));
    }


 




}
