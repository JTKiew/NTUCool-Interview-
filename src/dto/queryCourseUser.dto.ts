import { IsNotEmpty } from 'class-validator'

export class queryEnrollUserDto {
    @IsNotEmpty()   // ensure courseId not empty string
    courseId: number
}