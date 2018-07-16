import {server} from '../../server'
import {Employee} from '../domain/employee';
import request = require('supertest');

describe('EmployeeController', () => {

    afterAll((done) => {
        server.close(done);
    });


    describe('POST /employees', () => {

        it('should create a new employee', () => {

            const newEmployee: Employee = new Employee(1, 'Juan', 27);

            request(server)
                .post('/employees')
                .set('Content-Type', 'application/json')
                .send(JSON.stringify(newEmployee))
                .expect(201)
                .expect('Location', 'http://localhost:3000/employees/1');
        });
    });


    describe('GET /employees', () => {

        it('should create two employees and then return existing employees', () => {

            const newEmployees: Employee[] = [
                new Employee(1,'Juan', 27),
                new Employee(2, 'Pepe', 31)
            ];

            request(server)
                .post('/employees')
                .set('Content-Type', 'application/json')
                .send(JSON.stringify(newEmployees[0]))
                .expect(201);

            request(server)
                .post('/employees')
                .set('Content-Type', 'application/json')
                .send(JSON.stringify(newEmployees[1]))
                .expect(201);

            request(server)
                .get('/employees')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200)
                .expect(JSON.stringify(newEmployees));
        });
    });
});