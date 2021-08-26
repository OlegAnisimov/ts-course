import {Position} from "./Position";
import {Employee} from "./Employee";
import {Employees} from "./Employees";
// import {test} from "./test";

function main() {
    let table = `
    <table>
             <tr class="table__header">                 
                 <td>Name</td>
                 <td>Position</td>
                 <td>Salary</td>                 
             </tr>
        <tr class="table__tools">
            <td><button class="btn-add">Add</button></td>
            <td><button class="btn-salary">Salary</button></td>
            <td>Average salary</td>
            <td id="avgSalary"></td>
        </tr>
     </table>`;
    document.querySelector('#employees').insertAdjacentHTML('beforeend', table);


    Employees.add(new Employee(
        "John", Position.MANAGER, 1000));
    Employees.add(new Employee(
        "Bill", Position.DEVELOPER, 5000));
    Employees.add(new Employee(
        "James", Position.DIRECTOR, 4000));

    let employees: Employee[] = Employees.list();
    let employeeTempl: string = '';

    for (let e of employees) {
        employeeTempl += `
         <tr class="content-${e.name}">
             
             <td>${e.getName()}</td>
             <td>${e.getPosition()}</td>
             <td>${e.getSalary()}</td>
             <td><button class="btn-del" id="${e.name}">Delete</button></td>
</tr>` };
    document.querySelector(".table__header").insertAdjacentHTML('afterend', employeeTempl);

// del btn

    document.querySelectorAll('.btn-del').forEach(btn => btn.addEventListener('click', () => {
            for (let e of employees) {
                if (e.name === btn.id) Employees.del(e);
            }
            employees = employees;
            document.querySelector(`#${btn.id}`).parentElement.parentElement.remove();
            }
        )
    );

// add btn
    document.querySelector('.btn-add').addEventListener('click', () => {
        Employees.add(new Employee('Oleg', Position.DEVELOPER, 100));
        employees = Employees.list();
        console.log(employees)
        document.querySelector('.table__tools').insertAdjacentHTML('beforebegin', `
        <tr class="content-${employees[employees.length - 1].getName()}">             
             <td>${employees[employees.length - 1].getName()}</td>
             <td>${employees[employees.length - 1].getPosition()}</td>
             <td>${employees[employees.length - 1].getSalary()}</td>
             <td><button class="btn-del" id="${employees[employees.length - 1].getName()}">Delete</button></td>
        </tr>`);


    })

// avgSalary btn
    document.querySelector('.btn-salary').addEventListener('click', () => {
        let result = `<span>${Employees.getAvgSalary()}</span>`;
        document.querySelector('#avgSalary').innerHTML = result;
    })
}
let a:string = test(10);
console.log("test: a="+a);


(window as any).run = main;

