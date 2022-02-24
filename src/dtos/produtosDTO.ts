export class ProdutoDTO{
    id?:number;
    nome:string;
    valor:number;
    imagem:string;
    idcor:number;
    idmarca:number;

    constructor(nome:string,valor:number,imagem:string,idcor:number,idmarca:number, id?:number){
        this.nome = nome;
        this.valor = valor;
        this.imagem = imagem;
        this.idcor = idcor;
        this.idmarca = idmarca;
        this.id = id;
    }
}
