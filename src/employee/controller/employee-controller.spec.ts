import {EmployeeController} from './employee-controller';
import {Employee} from '../domain/employee';
import {EmployeeRepository} from '../repository/employee-repository';


describe('EmployeeController', () => {

    let employeeController: EmployeeController;

    const employeeRepositoryStub: EmployeeRepository = {
        findAll: () => {}
    } as EmployeeRepository;


    beforeEach(() => {

        employeeController = new EmployeeController(employeeRepositoryStub);
    });


    describe('#findAll', () => {

        it('should return existing employees', () => {

            const expectedEmployees: Employee[] = [
                new Employee(1, 'Juan', 27),
                new Employee(2, 'Pepe', 31),
                new Employee(3, 'Amaya', 25)
            ];

            spyOn(employeeRepositoryStub, 'findAll').and.returnValue(expectedEmployees);

            const employees = employeeController.findAll();

            expect(employees).toEqual(expectedEmployees);
        });
    });
});