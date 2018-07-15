import {ContentType, Controller, Get} from 'routing-controllers';
import {Employee} from '../employee';

@Controller('/employees')
export class EmployeeController {

    private employees: Employee[] = [
        new Employee('Juan', 27),
        new Employee('Pepe', 31),
        new Employee('Amaya', 25)
    ];


    @Get()
    @ContentType('application/json')
    findAll() {
        return this.employees;
    }
}