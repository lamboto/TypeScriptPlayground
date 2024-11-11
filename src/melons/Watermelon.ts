import {Melon} from "./Melon";

export class Watermelon extends Melon{

    private _elementIndex:number

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = weight * melonSort.length;
    }


   public getElementIndex(): number {
        return this._elementIndex;
    }

    public toString(): string {
        return `Element: Water \nSort: ${this.melonSort}\nElement Index: ${this.getElementIndex()}`;
    }
}