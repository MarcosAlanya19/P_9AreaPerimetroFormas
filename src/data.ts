export interface areaPerimetro{
    // INFO BASICA
    icon:string;
    title:string;
    placeholderArea:string;
    placeholderPerimetro:string;
    // IDENTIFICADOR
    idArea:string;
    idPerimetro:string;
    // OPERACION
    idInputArea:string;
    idInputPerimetro:string;
    idFormArea:string;
    idFormPerimetro:string;
    resultPrintArea:string;
    resultPrintPerimetro:string;
}

export const forms: areaPerimetro[] = [
    {
        // Info basica
        icon:'<i class="fa-solid fa-square-minus form"></i>',
        title:'CUBO',
        placeholderArea:'Ingresa Lado',
        placeholderPerimetro:'Ingresa lado',
        // Identificador
        idArea:'collapse1',
        idPerimetro:'collapse2',
        // Operacion
        idFormArea:'form-area-cuadrado',
        idInputArea:'input-cuadrado-area',
        resultPrintArea:'result-area-cuadrado',
        idFormPerimetro:'form-perimetro-cuadrado',
        idInputPerimetro:'input-cuadrado-perimetro',
        resultPrintPerimetro:'result-perimetro-cuadrado',
    },
    {
        // Info basica
        icon:'<i class="fa-solid fa-circle-xmark form"></i>',
        title:'ESFERA',
        placeholderArea:'Ingresa radio',
        placeholderPerimetro:'Ingresa radio',
        // Identificador
        idArea:'collapse3',
        idPerimetro:'collapse4',
        // Operacion
        idInputArea:'input-circulo-area',
        idInputPerimetro:'input-circulo-perimetro',
        idFormArea:'form-area-circulo',
        idFormPerimetro:'form-perimetro-circulo',
        resultPrintArea:'result-area-circulo',
        resultPrintPerimetro:'result-perimetro-circulo',
    }
]