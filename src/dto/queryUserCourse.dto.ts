import { IsNotEmpty } from 'class-validator'

export class queryEnrollCourseDto {
    @IsNotEmpty()   // ensure userId not empty string
    userId: number
}