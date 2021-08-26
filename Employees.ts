import {Employee} from "./Employee";

export class Employees {
    static employees:Array<Employee>=[];

    static add(employee: Employee) {
        this.employees.push(employee)
    }
    static list():Employee[] {
        return [...this.employees];
    }

    static del(employee: Employee): Employees {
        this.employees.splice(this.employees.indexOf(employee), 1)
        console.log(this.employees)
        return this.employees
    }

    static getAvgSalary(): number {
            let avgSalary: number = 0;
        console.log(this.employees)
            this.employees.forEach( (e) => {
            avgSalary += e.getSalary();
        })
        avgSalary = avgSalary/this.employees.length
        return avgSalary;
    }
    
}