import { Body, Controller, Delete, Get, Headers, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto, editUserDto, queryUserDto } from './dto';
 
@Controller('user')
export class UserController {
    constructor( private userService: UserService) {}

    // create new user
    // url: localhost:3000/user/create
    // submited name and email carry by HTML Req Body
    @Post('create')
    createUser(
        @Body() dto: createUserDto,
        @Headers() headers:{}){
        return this.userService.createUser(dto, headers);
    };

    // get user data by id
    // url: localhost:3000/user/get/:id
    // :id must replace by the id of target user 
    @Get('get/:id')
    getUser(@Param('id', ParseIntPipe) id: number){
        return this.userService.getUser(id);
    }
    
    // query user by name/email
    // url: localhost:3000/user/query?filter= &str= 
    // use filter to specified content of str (name / email)
    // str contain query parameter
    @Get('query')
    queryUser(@Query() dto: queryUserDto){
        return this.userService.queryUser(dto);
    }
    
    // edit user name and email by id
    // url: localhost:3000/user/edit/:id
    // :id must replace by the id of target user 
    // edit data (name / email) carry by HTML Req Body
    // content in name or email can be blank => no changes
    @Put('edit/:id')
    edituser(
        @Headers() headers: {},
        @Param('id', ParseIntPipe) id: number, 
        @Body() dto: editUserDto){
        return this.userService.editUser(id, dto, headers);
    }

    // delete user by id
    // url: localhost:3000/user/edit/:id
    // :id must replace by the id of target user 
    @Delete('delete/:id')
    deleteUser(
        @Headers() headers: {},
        @Param('id', ParseIntPipe) id: number){
        return this.userService.deleteUser(id,headers);
    }
}
