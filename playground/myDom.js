const p = document.querySelector('p');

console.log(p)
const divs = Array.from(document.querySelectorAll('.imgFrame'));

console.log(divs);

p.addEventListener('click', () => {
    divs.forEach(div=> div.style.border = "2px solid blue");
})

let emoji = ":gym";
document.append()
const repButton = document.querySelector('#addReps');
const repDisplayer = document.querySelector('#repsDisplay');
const firstImg = document.querySelector('img');
console.log(firstImg.dataset, Array.isArray(firstImg.dataset), typeof firstImg.dataset, Array.from(firstImg.dataset))
repButton.addEventListener('click', () =>  {
    repDisplayer.insertAdjacentText('afterend', emoji);
    const clonedImg = firstImg.cloneNode();
    firstImg.insertAdjacentElement('afterend', clonedImg);
});

