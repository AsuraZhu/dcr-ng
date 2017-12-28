import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * 获取极验验证码
 */

 @Injectable()
 export class GtService {
    private url = 'http://batpool.dev.ailadui.net/v1/api/user/public/checkgt?time=' + (new Date()).getTime();
    private handleError(error: any): Promise<any> {
      return Promise.reject(error.message || error);
    }
    constructor(private http: HttpClient) {}
    getData(): Promise<any> {
      return this.http.get(this.url)
                 .toPromise()
                 .then(response => {
                  return response['data'];
                 })
                 .catch(this.handleError);
    }
 }
