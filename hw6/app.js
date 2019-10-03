const list = document.querySelector('li');




let array = Array.from(list);
console.log(array);

console.log('Q1')
const LIs = array.from(document.querySelectorAll('ul>li'));
console.log(LIs);

const LIsFiltered = LIs.filter(LI => LI.textContent == "Flexbox Video"); //arrow implies return
console.log(LIsFiltered);

const mappedLIs = LIsFiltered.map(obj => {
    return obj.dataset.time;
});

console.log(mappedLIs);

let sum = mappedSeconds.reduce((acc, val))

const filteredChained = Array.from(document.querySelectorAll('ul>li'))
.filter(LI => LI.textContent == "Flexbox Video")
.map(obj => {return obj.dataset.time;}) //need return because of curly brackets
.map(timeCode => {
       const parts = timeCode.split(':');
    //console.log(parts);
    return (parseInt(parts[0] * 60) + parseInt(parts[1]));
})

.reduce((acc, val) => {
    return acc + val;
}) //all it means is the stuff is added together