import {KeyValuePairs} from "./KeyValuePairs";

const pair1 = new KeyValuePairs<number, string>();
pair1.setKeyValue(1, "One");
pair1.display();  // Output: key = 1, value = One

const pair2 = new KeyValuePairs<string, boolean>();
pair2.setKeyValue("isAdmin", true);
pair2.display();