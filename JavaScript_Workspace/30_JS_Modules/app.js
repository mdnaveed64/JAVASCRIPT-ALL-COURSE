import {Employee} from "./employees/Employee.js";
import { Customer } from "./customers/Customer.js";

let employee = new Employee('John','Doe',40,'Sr. Manager');
employee.greet();

let customer = new Customer('Laura','Wilson',28,'India');
customer.greet();
