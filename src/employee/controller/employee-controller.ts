import {ContentType, Controller, Get} from 'routing-controllers';
import {EmployeeRepository} from '../repository/employee-repository';

@Controller('/employees')
export class EmployeeController {

    constructor(private employeeRepository: EmployeeRepository) {

    }


    @Get()
    @ContentType('application/json')
    findAll() {
        return this.employeeRepository.findAll();
    }
}