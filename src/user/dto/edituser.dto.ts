import { ValidateIf, Matches, IsOptional } from 'class-validator'

export class editUserDto {
    @ValidateIf( obj => obj.name !== '')    // blank if no change to name
    @IsOptional()                           // optional parameter
    name: string

    @ValidateIf( obj => obj.email !== '')   // blank if no change to email
    @Matches('^[\\S]+@[\\S]+$')             // must match given regex
    @IsOptional()                           // optional parameter
    email: string;
}