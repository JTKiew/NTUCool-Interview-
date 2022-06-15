import { IsNotEmpty } from 'class-validator'

export class queryCourseDto {
    @IsNotEmpty()   // ensure userId not empty string
    userId: number
}