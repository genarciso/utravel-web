import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, Subscriber} from 'rxjs';
import {HttpUtil} from '../util/http.util';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient, private router: Router) {
    }

    public post(url: string, parametros: any, header?: object): Observable<any> {
        return new Observable(observer => {
            this.verificarRespostaRequisicao(this.http.post(HttpUtil.url(url), parametros, header ? header : HttpUtil.headers())
                .pipe(
                    catchError(HttpUtil.processarErro)
                ), observer);
        });
    }

    public get(url: string): Observable<any> {
        return new Observable(observer => {
            this.verificarRespostaRequisicao(this.http
                .get(HttpUtil.url(url), HttpUtil.headers())
                .pipe(
                    catchError(HttpUtil.processarErro)
                ), observer);
        });
    }

    public delete(url: string): Observable<any> {
        return new Observable(observer => {
            this.verificarRespostaRequisicao(this.http
                .delete(HttpUtil.url(url), HttpUtil.headers())
                .pipe(
                    catchError(HttpUtil.processarErro)
                ), observer);
        });
    }

    public put(url: string, parametros: any): Observable<any> {
        return new Observable(observer => {
            this.verificarRespostaRequisicao(this.http.put(HttpUtil.url(url), parametros, HttpUtil.headers())
                .pipe(
                    catchError(HttpUtil.processarErro)
                ), observer);
        });
    }

    // public download(url: string, parametros: any): Observable<Blob> {
    //     return this.http.post(HttpUtil.url(url), parametros, {responseType: 'blob'})
    //         .pipe(
    //             catchError(HttpUtil.processarErro)
    //         );
    // }

    private verificarRespostaRequisicao(subscribe: Observable<any>, observer: Subscriber<any>) {
        subscribe.subscribe(data => {
            this.verificarReautenticacaoUsuario(data.headers);
            observer.next(data.body);
            observer.complete();
        }, error => {
            // this.verificarAutenticacaoValida(error);
            observer.error(error);
            observer.complete();
        });
    }

    private verificarReautenticacaoUsuario(response: HttpHeaders) {
        const token = response.get('Authorization');
        if (token) {
            localStorage.setItem(environment.chaveTokenAcessoLocalStorage, response.get('Authorization'));
        }
    }

    // private verificarAutenticacaoValida(erro: Erro) {
    //     if (erro.status === 401) {
    //         localStorage.clear();
    //         this.router.navigateByUrl('/login/form');
    //     }
    // }
}
