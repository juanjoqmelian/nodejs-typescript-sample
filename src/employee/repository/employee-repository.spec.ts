import {EmployeeRepository} from './employee-repository';
import {Employee} from '../domain/employee';
import {CreateEmployee} from '../domain/create-employee';

describe('EmployeeRepository', () => {

    const employeesMap: Map<number, Employee> = new Map();
    let employeeRepository: EmployeeRepository;

    beforeEach(() => {

        employeeRepository = new EmployeeRepository(employeesMap);
    });


    describe('#create', () => {

        it('should insert an employee in the repository', () => {

            const id = employeeRepository.create(new CreateEmployee('Mary', 33));

            expect(id).toBe(1);
            expect(Array.from(employeesMap.values())).toContain(new Employee(1, 'Mary', 33));
        });

    });

    describe('#findAll', () => {


        it('should return existing employees', () => {


        });
    });
});