import { Presentation } from "./presentation"; // require
import { Service } from "./service"; // require

const service = new Service();
const presentation = new Presentation(service);

console.log("** Application Hotel **");
presentation.start();
