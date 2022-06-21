import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryEnrollmentDto {
  @ApiProperty()
  @IsOptional() // optional parameter
  userId: number;

  @ApiProperty()
  @IsOptional() // optional parameter
  courseId: number;

  @ApiProperty()
  @IsOptional() // optional parameter
  role: 'student' | 'teacher';
}
