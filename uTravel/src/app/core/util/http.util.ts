import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {environment} from '../../../environments/environment';

export class HttpUtil {

    public static url(path: string): string {
        const uri = environment.apiHost ? ((environment.apiSSL ? 'https://' : 'http://') + environment.apiHost) : '';
        return uri + environment.apiContext + path;
    }

    public static headers(): object {
        console.log(HttpUtil.httpHeaders());
        return {headers: HttpUtil.httpHeaders(), observe: 'response'};
    }

    public static httpHeaders() {
        const headersParams = {'Content-Type': 'application/json;charset=utf-8'};
        headersParams['Accept'] = 'application/json';
        const token: string = localStorage.getItem(environment.chaveTokenAcessoLocalStorage);
        if (token) {
            headersParams['Authorization'] = 'Bearer ' + token;
        }
        return  new HttpHeaders(headersParams);
    }


    public static processarErro(error: HttpErrorResponse) {
        let mensagens: string[];
        if (error.error instanceof ProgressEvent) {
            mensagens = ['erro.conexao_servidor'];
        } else if (error.error.status === '404') {
            mensagens = ['erro.endpoint_nao_encontrado_na_api'];
        } else if (error.error.status === '500') {
            mensagens = ['erro.erro_interno_no_servidor'];
        } else {
            mensagens = HttpUtil.getMensagensDeErro(error.error);
        }
        return throwError('Teste');
    }

    public static downloadFile(type: string, response: Blob, nomeArquivo: string) {
        const blob = new Blob([response], {type: type});
        const url = window.URL.createObjectURL(blob);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob);
        } else {
            const a = document.createElement('a');
            a.href = url;
            a.download = nomeArquivo;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        window.URL.revokeObjectURL(url);
    }

    private static getMensagensDeErro(errors: any): string[] {
        const mensagens: string[] = [];
        for (const error of errors.errosGerais) {
            mensagens.push(error.codigo);
        }
        return mensagens;
    }
}
