import { IsOptional, ValidateIf } from 'class-validator'
import { Transform } from 'class-transformer'

export class queryEnrollmentDto {
    @IsOptional()   // optional parameter
    userId: number

    @IsOptional()   // optional parameter
    courseId: number
    
    @IsOptional()   // optional parameter
    role: 'student' | 'teacher'
}