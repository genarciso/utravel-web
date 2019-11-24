import {Observable, Subject} from 'rxjs';
import {HttpService} from './http.service';
import {Entidade} from '../modelos/dominio/entidade.model';

export abstract class AbstractCrudService<T extends Entidade> {

    public _aoSalvarEvento = new Subject<T>();
    public _aoCarregarEvento = new Subject<T[]>();
    public _aoEditarEvento = new Subject<T>();
    public _aoDeletarEvento = new Subject<number[]>();

    constructor(protected httpService: HttpService) {}

    public buscarPorId(id: number): Observable<any> {
        return this.httpService.get(this.getUrlBaseComId(id));
    }

    public salvar(entidade: T): Observable<any> {
        const parametros = JSON.stringify(entidade);
        return this.httpService.post(this.getUrlBase() + '/', parametros);
    }

    public editar(entidade: T): Observable<any> {
        const parametros = JSON.stringify(entidade);
        return this.httpService.put(this.getUrlBaseComId(entidade.id), parametros);
    }

    public deletar(id: number): Observable<any> {
        return this.httpService.delete(this.getUrlBaseComId(id));
    }

    public todos(): Observable<any> {
        return this.httpService.get(this.getUrlBase() + '/all');
    }

    public getUrlBaseComId(id: number): string {
        return this.getUrlBase() + '/' + id;
    }

    public abstract getUrlBase(): string;

    get aoSalvar(): Observable<T> {
        return this._aoSalvarEvento.asObservable();
    }

    get aoCarregar(): Observable<T[]> {
        return this._aoCarregarEvento.asObservable();
    }

    get aoDeletar(): Observable<number[]> {
        return this._aoDeletarEvento.asObservable();
    }

    get aoEditar(): Observable<T> {
        return this._aoEditarEvento.asObservable();
    }
}
