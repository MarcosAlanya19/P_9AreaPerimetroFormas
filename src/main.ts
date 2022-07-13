import './style.css'
import './bootstrap.css'
import { forms } from './data';

// if (!formAreaCuadrado) throw new Error("El boton no funciona");
// HTML
const formsAreaPerimetro = document.querySelector<HTMLFormElement>('#forms-area-perimetro')!;
const createFormsHtml=()=>{
    let templateHTML ='';
    forms.forEach(e=>{
        templateHTML +=
        `<div class="card m-2 text-center col-sm" style="width: 18rem">
    ${e.icon}
    <div class="card-body">
        <h5 class="card-title">${e.title}</h5>
    </div>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${e.idArea}" aria-expanded="true" aria-controls="${e.idArea}">
                    Calcular area
                </button>
            </h2>
            <div id="${e.idArea}" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <form id="${e.idFormArea}" class="list-group">
                    <input placeholder="${e.placeholderArea}" required id="${e.idInputArea}" class="text-center" type="number">
                    <li class="list-group-item">Area:<span id="${e.resultPrintArea}"></span></li>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit">CALCULAR</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${e.idPerimetro}" aria-expanded="false" aria-controls="${e.idPerimetro}">
                Calcular Perimetro
                </button>
            </h2>
            <div id="${e.idPerimetro}" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <form id="${e.idFormPerimetro}" class="list-group">
                    <input required placeholder="${e.placeholderPerimetro}" type="number" id="${e.idInputPerimetro}" class="text-center" >
                    <li class="list-group-item">Perimetro:<span id="${e.resultPrintPerimetro}"></span></li>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit">CALCULAR</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`;
    });
    formsAreaPerimetro.innerHTML = templateHTML;
}
createFormsHtml();

// <------------- CUADRADO ------------->
// OPERACIONES
const areaCuadrado = (lado:number) =>lado * lado;
const perimetroCuadrado = (lado:number) => lado *4;

// CACULAR
const ladoCuadradoArea = document.querySelector<HTMLInputElement>('#input-cuadrado-area')!;
const ladoCuadradoPerimetro = document.querySelector<HTMLInputElement>('#input-cuadrado-perimetro')!;
const formAreaCuadrado = document.querySelector<HTMLButtonElement>('#form-area-cuadrado')!;
const formPerimetroCuadrado = document.querySelector<HTMLButtonElement>('#form-perimetro-cuadrado')!;

formAreaCuadrado.addEventListener('submit', e => {
    e.preventDefault();
    const cuadrado = parseInt(ladoCuadradoArea.value);
    const areaResult = areaCuadrado(cuadrado);
    const result= document.querySelector<HTMLElement>('#result-area-cuadrado')!;
    result.innerHTML = ` ${areaResult.toFixed(2)}`
});

formPerimetroCuadrado.addEventListener('submit', e => {
    e.preventDefault();
    const cuadrado = parseInt(ladoCuadradoPerimetro.value);
    const perimetroResult = perimetroCuadrado(cuadrado);
    const result= document.querySelector<HTMLElement>('#result-perimetro-cuadrado')!;
    result.innerHTML = ` ${perimetroResult.toFixed(2)}`
});

// <------------- CIRCULO ------------->
// OPERACIONES
const areaCirculo = (radio:number) =>Math.PI * Math.pow(radio,2);
const perimetroCirculo = (radio:number) => 2*Math.PI*radio;

// CACULAR
const radioCirculoArea = document.querySelector<HTMLInputElement>('#input-circulo-area')!;
const radioCirculoPerimetro = document.querySelector<HTMLInputElement>('#input-circulo-perimetro')!;
const formAreaCirculo = document.querySelector<HTMLButtonElement>('#form-area-circulo')!;
const formPerimetroCirculo = document.querySelector<HTMLButtonElement>('#form-perimetro-circulo')!;

formAreaCirculo.addEventListener('submit', e => {
    e.preventDefault();
    const circulo = parseInt(radioCirculoArea.value);
    const areaResult = areaCirculo(circulo);
    const result= document.querySelector<HTMLElement>('#result-area-circulo')!;
    result.innerHTML = ` ${areaResult.toFixed(2)}`
});

formPerimetroCirculo.addEventListener('submit', e => {
    e.preventDefault();
    const cuadrado = parseInt(radioCirculoPerimetro.value);
    const perimetroResult = perimetroCuadrado(cuadrado);
    const result= document.querySelector<HTMLElement>('#result-perimetro-circulo')!;
    result.innerHTML = ` ${perimetroResult.toFixed(2)}`
});

