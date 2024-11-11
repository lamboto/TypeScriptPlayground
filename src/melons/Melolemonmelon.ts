import {Watermelon} from "./Watermelon";
import {Melon} from "./Melon";

export class Melolemonmelon extends Melon{

    private elements = ["Water", "Fire", "Earth", "Air"];
    private currentIndex = 0;
    private _elementIndex:number

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = weight * melonSort.length;
    }

    morph(): void{
        this.currentIndex = (this.currentIndex + 1) % this.elements.length;
    }


    public getElementIndex(): number {
        return this._elementIndex;
    }

    toString(): string {
        const currentElement = this.elements[this.currentIndex];
        return `Element: ${currentElement}\nSort: ${this.melonSort}\nElement Index: ${this.getElementIndex()}`;
    }

}