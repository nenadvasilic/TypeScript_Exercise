import { LikeComponent } from "./like.component";

let component = new LikeComponent(10, true);

component.onClick();

console.log(
  `likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`
);

// TERMINAL:

// tsc main.ts --target ES5

// node main.js

// RESULT:

// likesCount: 9, isSelected: false
