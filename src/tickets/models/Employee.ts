export abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string | undefined>;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work() {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask)
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    public getSalary(): number {
        return this.salary;
    }

    public getInfo(): string {
        return `${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
}