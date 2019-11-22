export abstract class EntidadeBuilder<T extends Entidade> {
    private id: number;

    comID(valor: number) {
        this.id = valor;
        return this;
    }

    construir(tipo: new () => T) {
        const instancia = new tipo();

        instancia.id = this.id;

        return instancia;
    }
}

export abstract class Entidade {
    ativo: boolean;
    id: number;

    constructor(id?: number) {
        this.id = (id) ? id : null;
        this.ativo = true;
    }
}
