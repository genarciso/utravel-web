import {Entidade, EntidadeBuilder} from './entidade.model';

export class Usuario extends Entidade {
    login: string;
    senha: string;
    nome: string;
    email: string;
}

export class UsuarioBuilder extends EntidadeBuilder<Usuario> {
    login: string;
    senha: string;
    nome: string;
    email: string;

    comLogin(valor: string): UsuarioBuilder {
        this.login = valor;
        return this;
    }

    comNome(valor: string): UsuarioBuilder {
        this.nome = valor;
        return this;
    }

    comEmail(valor: string): UsuarioBuilder {
        this.email = valor;
        return this;
    }

    comSenha(valor: string): UsuarioBuilder {
        this.senha = valor;
        return this;
    }

    construir(): Usuario {
        const instancia = super.construir(Usuario);

        instancia.login = this.login;
        instancia.senha = this.senha;
        instancia.nome = this.nome;
        instancia.email = this.email;

        return instancia;
    }

}
