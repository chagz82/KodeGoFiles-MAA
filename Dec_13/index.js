// Objects
// an entry with properties and behavior (method)

// Object literal {}
// key-value pair
// property: value,
const person = {
    firstName:  "Mark",
    lastName:   "Artiaga",
    age:        40,
    gender:     "Male",
}

console.log(person.firstName);

console.log(`${person.firstName} ${person.lastName}`);

person.isadmin = true;
person.firstName = "Mark Anthony"

console.log(`${person.firstName} ${person.lastName}`);

// object instance
const person2 = new Object();

person2.firstName = "Ruby Jean";
person2.lastName = "Artiaga";
person2.age = 43;
person2.gender = "female";

console.log(`${person2.firstName} ${person2.lastName}`);

// object constructor
// Pascal Case in declaring name variables
// function declaration
function Car(color, brand, model, year, sound) {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log(sound);
    }
}

const vios = new Car ("Black", "Toyota", "Vios", "2020", "Wheerr wheerrr");
console.log(vios.color);
vios.start();


const student = {
    firstName:  "Andres",
    middleName:  "Cruz",
    lastName:  "Bonifacio",
    grade:  99,
    hobby:  ["reading", "playing"],
    name:  {
        fName:  "Andres",
        lName:  "Bonifacio"
    }
}

console.log(student.name.fName, student.name.lName);
// console.log(student.hobby[0]);

// for... of
// element of array
for (hobby of student.hobby){
    console.log(hobby);
}

// for... in
// property in Object: student
for (property in student){
    console.log(`${property}: ${student[property]}`);
}

// for... in w/ array
// index in array
for(key in student.hobby){
    console.log(student.hobby[key]);
        
}
