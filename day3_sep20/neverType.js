// let a: never = 'hello';
// console.log(a);
function processInput(input) {
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
    }
}
processInput('text');



function getArea(shape) {
    switch (shape) {
        case 'circle':
            return 90;
        case 'square':
            return 45;
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
getArea('circle');
getArea('square');
var unknownRole = function (role) {
    throw new Error("Invalid role: ".concat(role));
};
var authorize = function (role) {
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
console.log(authorize('fresher'));
