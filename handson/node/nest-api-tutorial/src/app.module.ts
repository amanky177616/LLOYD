import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [StudentModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
