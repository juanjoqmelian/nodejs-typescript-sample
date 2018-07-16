import {Employee} from '../domain/employee';
import {CreateEmployee} from '../domain/create-employee';

export class EmployeeRepository {


    constructor(private storage: Map<number, Employee>) {

    }

    create(employee: CreateEmployee): number {
        const newId = this.getNextId();
        const newEmployee: Employee = new Employee(newId, employee.name, employee.age);
        this.storage.set(newId, newEmployee);
        return newId;
    }

    findAll(): Employee[] {
        return Array.from(this.storage.values());
    }


    private getNextId() {
        if (Array.from(this.storage.keys()).length == 0) return 1;
        const highestId = Math.max.apply(this.storage.keys());
        return highestId + 1;
    }
}