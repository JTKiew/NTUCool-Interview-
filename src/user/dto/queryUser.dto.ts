import { IsNotEmpty, Matches, ValidateIf } from 'class-validator'

export class queryUserDto {
    @IsNotEmpty()   // ensure filter not empty string
    filter: string

    @IsNotEmpty()   // ensure str not empty string
    @ValidateIf(obj => obj.filter === "email")  // validate if the str contain email addr
    @Matches('^[\\S]+@[\\S]+$')                 // must match given regex
    str: string
}