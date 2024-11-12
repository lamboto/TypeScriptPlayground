import {Box} from "./Box";

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
box.remove();
console.log(box.getCount());