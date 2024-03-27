class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

class Individual extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
}

class Department extends Employee {
  constructor(name) {
    super(name, 0);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(employee) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  getSalary() {
    let totalSalary = 0;
    for (const employee of this.employees) {
      totalSalary += employee.getSalary();
    }
    return totalSalary;
  }
}

const john = new Individual("John", 50000);
const jane = new Individual("Jane", 60000);

const development = new Department("Development");
const marketing = new Department("Marketing");

development.addEmployee(john);
development.addEmployee(jane);

const manager = new Individual("Manager", 80000);
marketing.addEmployee(manager);

const organization = new Department("Organization");
organization.addEmployee(development);
organization.addEmployee(marketing);

console.log("Salário total da organização:", organization.getSalary());