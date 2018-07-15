import {EmployeeController} from './employee-controller';
import {Employee} from '../employee';


describe('EmployeeController', () => {

    let employeeController: EmployeeController = new EmployeeController();

    beforeEach(() => {


    });

    describe('#findAll', () => {

        it('should return existing employees', () => {

            const expectedEmployees: Employee[] = [
                new Employee('Juan', 27),
                new Employee('Pepe', 31),
                new Employee('Amaya', 25)
            ];

            const employees = employeeController.findAll();

            expect(employees).toEqual(expectedEmployees);
        });
    });
});