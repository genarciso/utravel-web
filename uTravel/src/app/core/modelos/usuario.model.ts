export class Usuario {
    private _usuario: string;
    senha: string;

    constructor() {
        this._usuario = '';
        this.senha = '';
    }

    get usuario(): string {
        return this._usuario;
    }

    set usuario(usuario: string) {
        this._usuario = usuario;
    }
}
