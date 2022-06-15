import { IsNotEmpty } from 'class-validator'

export class addEnrollmentDto {
    @IsNotEmpty()   // ensure userId not empty string
    userId: number

    @IsNotEmpty()   // ensure courseId not empty string
    courseId: number    
    
    @IsNotEmpty()   // ensure role not empty string
    role: 'student' | 'teacher'
}