import { Department } from "./department";

import { Role } from "./role";

export class Employee {
    id: number;
    employeeName: string;
    roles: Role[];
    department: Department;
}
