class Employee
{
  constructor(name, position, salary)
  {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getSalary()
  {
    return this.salary;
  }
}
const john = new Employee("John", "Manager", 50000);
const salary = john.getSalary();
console.log(salary);