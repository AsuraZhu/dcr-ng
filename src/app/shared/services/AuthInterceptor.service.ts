import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // req.url =
        // 绝对路径
        let clonedRequest = req.clone({});
        console.log(req.url);
        if (req.url[0] === '/') {
          clonedRequest = req.clone({
            url: 'http://batpool.dev.ailadui.net/v1/api/' + req.url
          });
        }
        return next.handle(clonedRequest);
    }
}
