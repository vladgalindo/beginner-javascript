/*{
    var name = 'vlad';
    const lastName = 'Galindo';
    let age = 35;
}

console.log(name);
console.log(age);
console.log(lastName);*/


/*Closures*/

function createWOD(name, date) {
     return function (athlete) {
        return `${athlete} has sign up For today training ${date} the WOD is ${name}`;
     }
}

const fridayWod = createWOD('Barbara', new Date());

console.log(fridayWod('Vladimir'));
