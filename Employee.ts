import {Person} from "./Person";
import {Position} from "./Position";

export class Employee extends Person {
    constructor(_name: string,
                public position: Position,
                public salary: number) {
        super(_name);
    }

    getInfo() {
        return super.getInfo()+
            ` ${Position[this.position]} 
            ${this.salary}`;
    }
    
    getName(): string {
        return this.name;
    }

    getPosition(): string {
        return Position[this.position];
    }

    getSalary(): number {
        return this.salary;
    }
    
    
}