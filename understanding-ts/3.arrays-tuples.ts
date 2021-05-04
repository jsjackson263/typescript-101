
const person = {
    name: 'Jack',
    age: 30,
    hobbies: ['Sports', 'Cooking', 'Gardening'],
    role: [2, 'author'] //Tuple
};

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}

console.log(person.hobbies.pop());

let person2: [string, number] = ['Chris', 22];  //tuple - length is enforced
console.log(person2);


