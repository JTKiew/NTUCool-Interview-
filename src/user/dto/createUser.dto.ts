import { IsNotEmpty, Matches } from 'class-validator'

export class createUserDto {
    @IsNotEmpty()   // ensure name not empty string
    name: string;   

    @IsNotEmpty()   // ensure email not empty string                  
    @Matches('^[\\S]+@[\\S]+$')     // must match given regex
    email: string;
}