export interface areaPerimetro{
    // INFO BASICA
    icon:string;
    title:string;
    placeholderArea:string;
    placeholderArea2:string;
    placeholderPerimetro:string;
    placeholderPerimetro2:string;
    // IDENTIFICADOR
    idArea:string;
    idPerimetro:string;
    // OPERACION
    idInputArea:string;
    idInputArea2:string;
    idInputPerimetro:string;
    idInputPerimetro2:string;
    idFormArea:string;
    idFormPerimetro:string;
    resultPrintArea:string;
    resultPrintPerimetro:string;
}

export const forms2: areaPerimetro[] = [
    {
        // Info basica
        icon:'<i class="fa-solid fa-triangle-exclamation form"></i>',
        title:'TRIANGULO',
        placeholderArea:'Base',
        placeholderArea2:'Altura',
        placeholderPerimetro:'Base',
        placeholderPerimetro2:'Altura',
        // Identificador
        idArea:'collapse5',
        idPerimetro:'collapse6',
        // Operacion
        idFormArea:'form-area-triangulo',
        idInputArea:'input-triangulo-area',
        idInputArea2:'input-triangulo-area2',
        resultPrintArea:'result-area-triangulo',
        idFormPerimetro:'form-perimetro-triangulo',
        idInputPerimetro:'input-triangulo-perimetro',
        idInputPerimetro2:'input-triangulo-perimetro2',
        resultPrintPerimetro:'result-perimetro-triangulo',
    },
    {
        // Info basica
        icon:'<i class="fa-solid fa-rectangle-xmark form"></i>',
        title:'RECTANGULO',
        placeholderArea:'Largo',
        placeholderArea2:'Ancho',
        placeholderPerimetro:'Largo',
        placeholderPerimetro2:'Ancho',
        // Identificador
        idArea:'collapse7',
        idPerimetro:'collapse8',
        // Operacion
        idFormArea:'form-area-rectangulo',
        idInputArea:'input-rectangulo-area',
        idInputArea2:'input-rectangulo-area2',
        resultPrintArea:'result-area-rectangulo',
        idFormPerimetro:'form-perimetro-rectangulo',
        idInputPerimetro:'input-rectangulo-perimetro',
        idInputPerimetro2:'input-rectangulo-perimetro2',
        resultPrintPerimetro:'result-perimetro-rectangulo',
    }
]