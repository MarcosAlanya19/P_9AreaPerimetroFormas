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
        icon:'<i class="fa-solid fa-square form"></i>',
        title:'CUBO',
        placeholderArea:'Ingresa Lado',
        placeholderPerimetro:'Ingresa lado',
        idArea:'area-cuadrado',
        idPerimetro:'perimetro-cuadrado',
        idInputArea:'lado-area',
        idInputPerimetro:'lado-perimetro',
        idFormArea:'form-area-cuadrado',
        idFormPerimetro:'form-perimetro-cuadrado',
        resultPrintArea:'area-cuadrado',
        resultPrintPerimetro:'perimetro-cuadrado',
    },
    {
        icon:'<i class="fa-solid fa-circle form"></i>',
        title:'ESFERA',
        placeholderArea:'Ingresa radio',
        placeholderPerimetro:'Ingresa radio',
        idArea:'areaCirculo',
        idPerimetro:'perimetroCirculo',
        idInputArea:'string',
        idInputPerimetro:'',
        idFormArea:'string',
        idFormPerimetro:'string',
        resultPrintArea:'number',
        resultPrintPerimetro:'number',
    }
]