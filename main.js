//1

let monH1 = document.querySelector('h1')
monH1.addEventListener('click', () => {
    // monH1.className = 'text-blue'
    monH1.classList.add('text-blue')
})

//2 
let monH3 = document.querySelector('h3')
monH3.addEventListener('dblclick', () => {
    monH3.classList.add('text-error')
})

//3
let firstP = document.querySelectorAll('p')[0]
firstP.addEventListener('click', () => {
    firstP.classList.toggle('text-style')
})

//4

let mySpan = Array.from(document.querySelectorAll('p')[1].children)
// let secondP = document.querySelectorAll('p')[1]
// let mySpan = secondP.querySelectorAll('span')

mySpan.forEach(el => {
    el.addEventListener('click', () =>{
        el.classList.toggle('bolder-red')
    })
});


//5
let mySpan2 = Array.from(document.querySelectorAll('p')[2].children)

console.log(mySpan2);

mySpan2.forEach(el => {
    el.addEventListener('click', () =>{
        mySpan2.forEach(el => {
            el.classList.remove('bolder-red')
        });
        el.classList.t('bolder-red')
    })
});
