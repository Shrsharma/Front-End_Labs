class Student
{
    constructor(id,name)
    {
        this.id=id;
        this.name=name;

    }

    print()
    {
        console.log("Id of the student is: "+ this.id+ " and name is: "+ this.name);

    }
}

const s1 = new Student(101,"Shruti");
const s2 = new Student(102,"Emma");

s1.print();
s2.print();