// let a: never = 'hello';
// console.log(a);

type User = 'text' | 'image' | 'video';
function processInput(input: User) {
    switch (input) {
        case 'text':
            console.log('Processing text input.');
            break;
        case 'image':
            console.log('Processing image input.');
            break;
        case 'video':
            console.log('Processing video input.');
            break;
       
    } }
processInput('text'); 

//  processInput('audio');  TypeScript will throw an error here


type Shape = 'circle' | 'square';

function getArea(shape: Shape): number {
    switch (shape) {
        case 'circle':
            return 90; 
        case 'square':
            return 45; 
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
getArea('circle');
getArea('square');




type Role = 'admin' | 'user' | 'guest';

const unknownRole = (role: never): never => {
  throw new Error(`Invalid role: ${role}`);
};

const authorize = (role: Role): string => {
  switch (role) {
    case 'admin':
      return 'You can do anything';
    case 'user':
      return 'You can do something';
    case 'guest':
      return 'You can do nothing';
    default:
      return unknownRole(role);
  }
};
console.log(authorize('admin'));
//console.log(authorize('fresher'));




