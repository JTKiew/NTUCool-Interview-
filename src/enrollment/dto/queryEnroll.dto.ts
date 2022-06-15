import { IsOptional } from 'class-validator'

export class queryEnrollmentDto {
    @IsOptional()   // optional parameter
    userId: number

    @IsOptional()   // optional parameter
    courseId: number
    
    @IsOptional()   // optional parameter
    role: 'student' | 'teacher'
}