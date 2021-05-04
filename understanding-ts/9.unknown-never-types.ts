//unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

//userName = userInput;  //error
if (typeof userInput === 'string') {
    userName = userInput;
}


//never type (never returns anything)
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

const result = generateError('An error occurred!', 500);
console.log(result);