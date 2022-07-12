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
                        <form id="form-area-cuadrado" class="list-group">
                            <input placeholder="${e.placeholderArea}" required id="lado-area" class="text-center" type="number">
                            <li class="list-group-item">Area:<span id="area-cuadrado"></span></li>
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
                        <form id="form-perimetro-cuadrado" class="list-group">
                            <input required placeholder="${e.placeholderPerimetro}" type="number" id="lado-perimetro" class="text-center" >
                            <li class="list-group-item">Perimetro:<span id="perimetro-cuadrado"></span></li>
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
const ladoArea = document.querySelector<HTMLInputElement>('#lado-area')!;
const ladoPerimetro = document.querySelector<HTMLInputElement>('#lado-perimetro')!;
const formAreaCuadrado = document.querySelector<HTMLButtonElement>('#form-area-cuadrado')!;
const formPerimetroCuadrado = document.querySelector<HTMLButtonElement>('#form-perimetro-cuadrado')!;

formAreaCuadrado.addEventListener('submit', e => {
    e.preventDefault();
    const cuadrado = parseInt(ladoArea.value);
    const areaResult = areaCuadrado(cuadrado);
    const result= document.querySelector<HTMLElement>('#area-cuadrado')!;
    result.innerHTML = ` ${areaResult}`
});

formPerimetroCuadrado.addEventListener('submit', e => {
    e.preventDefault();
    const cuadrado = parseInt(ladoPerimetro.value);
    const perimetroResult = perimetroCuadrado(cuadrado);
    const result= document.querySelector<HTMLElement>('#perimetro-cuadrado')!;
    result.innerHTML = ` ${perimetroResult}`
});

// <------------- CIRCULO ------------->
// OPERACIONES
const areaCirculo = (radio:number) =>Math.PI * Math.pow(radio,2);
const perimetroCirculo = (radio:number) => 2*Math.PI*radio;
