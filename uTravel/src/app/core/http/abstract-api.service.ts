import {HttpService} from './http.service';
import {Observable} from 'rxjs';

export abstract class AbstractApiService {

    protected constructor(private endpointBasePath, private http: HttpService) {
    }

    protected get(url: string): Observable<any> {
        return this.http.get(`${this.endpointBasePath}/${url}`);
    }

    protected post(url: string, parametros: any, header?: object): Observable<any> {
        return this.http.post(`${this.endpointBasePath}/${url}`, parametros, header);
    }

    protected put(url: string, parametros: any): Observable<any> {
        return this.http.put(`${this.endpointBasePath}/${url}`, parametros);
    }

    protected delete(url: string): Observable<any> {
        return this.http.delete(`${this.endpointBasePath}/${url}`);
    }
}
