class Employee
{
    string Name;
    string Design;
    Date Dob;

    Employee(string name, string design, Date dob)
    {
        this.Name=name;
        this.Design=design;
        this.Dob=dob;

    }
     
    void CalcAge()
    {
        console.log("age");
    }
}

class Main
{
    void main()
    {
        Employee e1=new Employee("abc",abc,2000);
        Employee e2=new Employee("mno",mno,2000);
        Employee e3=new Employee("xyz",xyz,2000);
    }
}
