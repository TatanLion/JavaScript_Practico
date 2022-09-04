/** PRIMERA CLASE **/
// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
// const input = document.querySelector('input');

// console.log(input.value);
// console.log(h1, p, parrafito, pid, input);

/** SEGUNDA CLASE **/
// h1.innerHTML = 'Patito <br> Feo';
// h1.innerText = 'Patito <br> Feo';

// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

// h1.classList.add('agregar_clase');
// h1.classList.remove('agregar_clase');

// input.value = '456';

// const img = document.createElement('img');
// img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.platzi.com%2Fblog%2Fuploads%2F2015%2F01%2Fplatzi-logo-huge.png&f=1&nofb=1';
// console.log(img);

// pid.append(img);

/**TERCERA CLASE **/
const h1 = document.querySelector('h1');
const input1 =  document.querySelector('#calculo1');
const input2 =  document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
pResult = document.querySelector('#result')

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = sumaInputs;
}