export class Box<T> {

    public box:Array<any>;


    constructor() {
        this.box = [];
    }

    public add(element :T) {
        this.box.push(element);
    }

    public remove() {
        this.box.pop();
    }

    public getCount(): number {
        return this.box.length;
    }
}

