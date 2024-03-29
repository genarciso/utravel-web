import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Usuario, UsuarioBuilder} from '../../modelos/dominio/usuario.model';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {isNullOrUndefined} from 'util';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService {

    private aoEntrarEvento: Subject<Usuario> = new Subject();
    private aoSairEvento: Subject<Usuario> = new Subject();
    private aoEntrarErroEvento: Subject<string> = new Subject();
    private aoEncontrarUsuarioIncompletoEvento: Subject<string> = new Subject();
    private _usuarioLogado: Usuario;
    private _header: object;


    constructor(private httpService: HttpService,
                private router: Router) {
        this.carregarUsuario();
    }

    private carregarUsuario() {
        this._usuarioLogado = JSON.parse(localStorage.getItem(environment.chaveUsuarioAcessoLocalStorage));
    }

    private salvarUsuario(usuario: Usuario) {
        localStorage.setItem(environment.chaveUsuarioAcessoLocalStorage, JSON.stringify(usuario));
        this._usuarioLogado = usuario;
    }

    private serializarUsuario(response: any): Usuario {
        return new UsuarioBuilder()
            .comID(response.id)
            .comLogin(response.login)
            .comEmail(response.email)
            .comNome(response.nome)
            .construir();
    }

    public entrar(login: string, senha: string): void {

        this.httpService.post('/usuario/login', {email: login, senha: senha})
            .subscribe(response => {
                localStorage.setItem(environment.chaveTokenAcessoLocalStorage, response.token);
                this.salvarUsuario(this.serializarUsuario(response));
                this.aoEntrarEvento.next(this._usuarioLogado);
                this.router.navigateByUrl('dashboard/');
            });
    }

    public sair(): void {
        const usuario = this._usuarioLogado;
        localStorage.clear();
        this._usuarioLogado = null;
        this.aoSairEvento.next(usuario);
        this.router.navigateByUrl('/');
    }

    public aoEntrar(): Observable<Usuario> {
        return this.aoEntrarEvento.asObservable();
    }

    public aoSair(): Observable<Usuario> {
        return this.aoSairEvento.asObservable();
    }

    public aoEntrarErro(): Observable<string> {
        return this.aoEntrarErroEvento.asObservable();
    }

    public aoEncontrarUsuarioIncompleto(): Observable<any> {
        return this.aoEncontrarUsuarioIncompletoEvento.asObservable();
    }

    public isLogged(): boolean {
        return !isNullOrUndefined(this._usuarioLogado);
    }

    get usuarioLogado(): Usuario {
        return this._usuarioLogado;
    }

    get tokenAcesso(): string {
        return localStorage.getItem(environment.chaveTokenAcessoLocalStorage);
    }

}
