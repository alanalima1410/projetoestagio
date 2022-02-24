export class ProdutoDTO{
    id?:number;
    nome:string;
    valor:number;
    imagem:string;
    cor:string;
    marca:string;

    constructor(nome:string,valor:number,imagem:string,cor:string,marca:string, id?:number){
        this.nome = nome;
        this.valor = valor;
        this.imagem = imagem;
        this.cor = cor;
        this.marca = marca;
        this.id = id;
    }
}
