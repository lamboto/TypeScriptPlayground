import {Watermelon} from "./Watermelon";
import {Firemelon} from "./Firemelon";
import {Earthmelon} from "./Earthmelon";
import {Airmelon} from "./Airmelon";
import {Melon} from "./Melon";
import {Melolemonmelon} from "./Melolemonmelon";

let melon: Melolemonmelon = new Melolemonmelon(100,'vodenmelem');

console.log(melon.toString());

melon.morph();

console.log(melon.toString());

melon.morph();
console.log(melon.toString());