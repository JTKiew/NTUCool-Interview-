import { IsNotEmpty } from 'class-validator'

export class queryUserDto {
    @IsNotEmpty()   // ensure courseId not empty string
    courseId: number
}