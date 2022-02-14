export class ProdutoDTO{
    nome:string;
    valor:string;
    imagem:string;
    idcor:number;
    idmarca:number;


    constructor(nome:string,valor:string,imagem:string,idcor:number,idmarca:number){
        this.nome = nome;
        this.valor = valor;
        this.imagem = imagem;
        this.idcor = idcor;
        this.idmarca = idmarca;
    }
}