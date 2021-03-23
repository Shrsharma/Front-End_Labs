function Employee(name,design,year)
{
    this.name=name;
    this.design=design;
    this.year=year;
}

Employee.prototype.calcAge=function()
{
    console.log("age of "+this.name+" is: "+(2021-this.year));
}

console.log(Employee.prototype);

let emp1=new Employee("Alex","tester", 1995);
console.log(emp1);
emp1.calcAge();