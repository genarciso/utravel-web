import {Entidade, EntidadeBuilder} from './entidade.model';

export class Usuario extends Entidade {
    usuario: string;
    senha: string;
}

export class UsuarioBuilder extends EntidadeBuilder<Usuario> {
    usuario: string;
    senha: string;

    comUsuario(valor: string): UsuarioBuilder {
        this.usuario = valor;
        return this;
    }

    comSenha(valor: string): UsuarioBuilder {
        this.senha = valor;
        return this;
    }

    construir(): Usuario {
        const instancia = super.construir(Usuario);

        instancia.usuario = this.usuario;
        instancia.senha = this.senha;

        return instancia;
    }

}
