import {server} from '../../server'
import request = require('supertest');
import {Employee} from '../employee';

describe('EmployeeController', () => {

    afterAll((done) => {
        server.close(done);
    });

    describe('GET /employees', () => {

        it('should return existing employees', (done) => {

            const expectedEmployees: Employee[] = [
                new Employee('Juan', 27),
                new Employee('Pepe', 31),
                new Employee('Amaya', 25)
            ];

            request(server)
                .get('/employees')
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200)
                .expect(JSON.stringify(expectedEmployees))
                .end(done)
        });
    });
});