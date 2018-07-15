import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {EmployeeController} from './employee/controller/employee-controller';

const app = createExpressServer({
    controllers: [EmployeeController]
});

export const server = app.listen(3000);

