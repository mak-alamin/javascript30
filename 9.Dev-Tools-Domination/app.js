function makeMe(color){
    this.event.target.style.color = color;
}

 // Regular
 console.log('hello');

 // Interpolated
 console.log('Hello I am a %s string!', '💩');

// Styled
console.log('%c I am some great text', 'font-size:20px; background:red');

 // warning!
 console.warn('OH NOOO');

 // Error :|
 console.error('Shit!');

// Info - Works on Firefox
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

// Grouping together
dogs.forEach( dog => {
    console.groupCollapsed(dog.name)
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
    console.groupEnd(dog.name)
});

//Counting
console.count("mak")
console.count("mak")
console.count("234")
console.count("234")
console.count("mak")
console.count("mak")

// timing
console.time('fetching data');

fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});

//table
console.table(dogs);