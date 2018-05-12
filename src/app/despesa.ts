export class Despesa {
  public id: number;
  public nome: string;
  public tipo: string;
  public data: Date;
  public valor: number;

  constructor(id: number, tipo: string, nome: string, data: Date, valor: number) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.data = data;
    this.valor = valor;
  }
}
