abstract class Employee {
    private name: string;
    private age: number;
    private salary: number;
    private tasks: Array<string>;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work():void{
        const currentTask = this.tasks.shift();
    };

    public abstract collectSalary():void;
}