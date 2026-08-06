// import { heroType } from "./heroType";
// import { aboutType } from "./aboutType";
// import gallery from "./gallery";
// export const schema = {
//   types: [
//     heroType,
//     aboutType,
//     gallery,
//   ],
// };
// import gallery from "./gallery";

// export const schema = {
//   types: [gallery],
// };
// import { heroType } from "./heroType";
// import { aboutType } from "./aboutType";
// import gallery from "./gallery";

// console.log("heroType:", heroType);
// console.log("aboutType:", aboutType);
// console.log("gallery:", gallery);

// export const schema = {
//   types: [
//     heroType,
//     aboutType,
//     gallery,
//   ],
// };
import { heroType } from "./heroType";
import { aboutType } from "./aboutType";
import gallery from "./gallery";

console.log("heroType", heroType);
console.log("aboutType", aboutType);
console.log("gallery", gallery);
console.log("gallery.default", gallery?.default);

export const schema = {
  types: [
    heroType,
    aboutType,
    gallery.default ?? gallery,
  ],
};