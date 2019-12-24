// Default export class
// class Nokia {
//     volumeUp() {
//         console.log("High volume");
//     }
// }
// export default Nokia;

// Default export function

// export default function show() {
//     console.log("Hello module")
// }

// Named export class
class Nokia {
  volumeUp() {
    console.log("High volume");
  }
}
export { Nokia };

// Named export variable
export const a = 10;
// Named export function

export function show() {
  console.log("Hello moduke");
}
