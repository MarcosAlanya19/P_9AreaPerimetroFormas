import './style.css'
import './bootstrap.css'
import { forms } from './data';
import { forms2 } from './data2';

// if (!formAreaCuadrado) throw new Error("El boton no funciona");
// HTML
// <-------------------------- 1 CONSULTA -------------------------->
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
    const perimetroResult = perimetroCirculo(cuadrado);
    const result= document.querySelector<HTMLElement>('#result-perimetro-circulo')!;
    result.innerHTML = ` ${perimetroResult.toFixed(2)}`
});

// <-------------------------- 2 CONSULTAS -------------------------->
const forms2AreaPerimetro = document.querySelector<HTMLFormElement>('#forms2-area-perimetro')!;
const createForms2Html=()=>{
    let templateHTML ='';
    forms2.forEach(e=>{
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
                    <div class="row">
                        <input placeholder="${e.placeholderArea}" required id="${e.idInputArea}" class="text-center col marginInput" type="number">
                        <input placeholder="${e.placeholderArea2}" required id="${e.idInputArea2}" class="text-center col marginInput" type="number">
                    </div>
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
                <div class="row">
                    <input placeholder="${e.placeholderPerimetro}" required id="${e.idInputPerimetro}" class="text-center col marginInput" type="number">
                    <input placeholder="${e.placeholderPerimetro2}" required id="${e.idInputPerimetro2}" class="text-center col marginInput" type="number">
                </div>
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
    forms2AreaPerimetro.innerHTML = templateHTML;
}
createForms2Html();

// <------------- TRIANGULO ------------->
// OPERACIONES
const areaTriangulo = (base:number,altura:number) =>(base*altura)/2;
const perimetroTriangulo = (largo:number,ancho:number) => (largo*2) + (ancho*2);

// CACULAR
const baseTrianguloArea = document.querySelector<HTMLInputElement>('#input-triangulo-area')!;
const alturaTrianguloArea = document.querySelector<HTMLInputElement>('#input-triangulo-area2')!;
const largoTrianguloPerimetro = document.querySelector<HTMLInputElement>('#input-triangulo-perimetro')!;
const anchoTrianguloPerimetro = document.querySelector<HTMLInputElement>('#input-triangulo-perimetro2')!;
const formAreaTriangulo = document.querySelector<HTMLButtonElement>('#form-area-triangulo')!;
const formPerimetroTriangulo = document.querySelector<HTMLButtonElement>('#form-perimetro-triangulo')!;

formAreaTriangulo.addEventListener('submit', e => {
    e.preventDefault();
    const largoTriangulo = parseInt(baseTrianguloArea.value);
    const anchoTriangulo = parseInt(alturaTrianguloArea.value);
    const areaResult = areaTriangulo(largoTriangulo,anchoTriangulo);
    const result= document.querySelector<HTMLElement>('#result-area-triangulo')!;
    result.innerHTML = ` ${areaResult.toFixed(2)}`
});

formPerimetroTriangulo.addEventListener('submit', e => {
    e.preventDefault();
    const largoTriangulo = parseInt(largoTrianguloPerimetro.value);
    const anchoTriangulo = parseInt(anchoTrianguloPerimetro.value);
    const perimetroResult = perimetroTriangulo(largoTriangulo,anchoTriangulo);
    const result= document.querySelector<HTMLElement>('#result-perimetro-triangulo')!;
    result.innerHTML = ` ${perimetroResult.toFixed(2)}`
});


// <------------- RECTANGULO ------------->
// OPERACIONES
const areaRectangulo = (largo:number,ancho:number) =>largo*ancho;
const perimetroRectangulo = (largo:number,ancho:number) => (largo*2) + (ancho*2);

// CACULAR
const largoRectanguloArea = document.querySelector<HTMLInputElement>('#input-rectangulo-area')!;
const anchoRectanguloArea = document.querySelector<HTMLInputElement>('#input-rectangulo-area2')!;
const largoRectanguloPerimetro = document.querySelector<HTMLInputElement>('#input-rectangulo-perimetro')!;
const anchoRectanguloPerimetro = document.querySelector<HTMLInputElement>('#input-rectangulo-perimetro2')!;
const formAreaRectangulo = document.querySelector<HTMLButtonElement>('#form-area-rectangulo')!;
const formPerimetroRectangulo = document.querySelector<HTMLButtonElement>('#form-perimetro-rectangulo')!;

formAreaRectangulo.addEventListener('submit', e => {
    e.preventDefault();
    const largoRectangulo = parseInt(largoRectanguloArea.value);
    const anchoRectangulo = parseInt(anchoRectanguloArea.value);
    const areaResult = areaRectangulo(largoRectangulo,anchoRectangulo);
    const result= document.querySelector<HTMLElement>('#result-area-rectangulo')!;
    result.innerHTML = ` ${areaResult.toFixed(2)}`
});

formPerimetroRectangulo.addEventListener('submit', e => {
    e.preventDefault();
    const largoRectangulo = parseInt(largoRectanguloPerimetro.value);
    const anchoRectangulo = parseInt(anchoRectanguloPerimetro.value);
    const perimetroResult = perimetroRectangulo(largoRectangulo,anchoRectangulo);
    const result= document.querySelector<HTMLElement>('#result-perimetro-rectangulo')!;
    result.innerHTML = ` ${perimetroResult.toFixed(2)}`
});
