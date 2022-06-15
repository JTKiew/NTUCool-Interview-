import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CourseModule } from 'src/course/course.module';
import { UserModule } from 'src/user/user.module';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';

@Module({
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  imports: [UserModule,CourseModule,AuthModule]
})
export class EnrollmentModule {}
