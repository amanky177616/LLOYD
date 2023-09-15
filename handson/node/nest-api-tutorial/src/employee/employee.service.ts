import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  findAll(): Employee[] {
    let empArray = [
      new Employee(1, 'Ashish Rautela', 'New Delhi, India', 'IT', 10000.0),
      new Employee(
        2,
        'Vivek Srivastava',
        'Greater Noida, India',
        'IT',
        20000.0,
      ),
      new Employee(3, 'Mukesh Kumar', 'Gurugram, Haryana', 'IT', 30000.0),
    ];

    return empArray;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
