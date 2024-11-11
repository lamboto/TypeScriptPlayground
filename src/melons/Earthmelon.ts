import {Melon} from "./Melon";

export abstract class Earthmelon extends Melon{

    private _elementIndex:number

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = weight * melonSort.length;
    }


    public getElementIndex(): number {
        return this._elementIndex;
    }

    public toString(): string {
        return `Element: Earth %n
                Sort: ${this.melonSort} %n
                Element Index: ${this.getElementIndex()}`;
    }
}