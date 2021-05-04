
enum Role {ADMIN, READ_ONLY, AUTHOR};
const enumperson = {
    name: 'Jack',
    age: 30,
    hobbies: ['Sports', 'Cooking', 'Gardening'],
    role: Role.READ_ONLY
};

console.log(enumperson.role);

// `any` type (not recommended, as it takes away the advs typescript have over js)
let favourite: any[];
favourite = ['Sports'];
console.log(favourite);

favourite = [666, 'Sports'];
console.log(favourite);



