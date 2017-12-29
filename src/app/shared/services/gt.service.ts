import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * 获取极验验证码
 * @constructor
 */

 @Injectable()
 export class GtService {
    private url = '/user/public/checkgt?time=' + (new Date()).getTime();
    private handleError(error: any): Promise<any> {
      return Promise.reject(error.message || error);
    }
    constructor(private http: HttpClient) {}
    /**
     * 获取极验验证码
     * @返回参数 是{}
     * @returns {} :any
     */
    getData(): Promise<any> {
      return this.http.get(this.url)
                 .toPromise()
                 .then(response => {
                  return response;
                 })
                 .catch(this.handleError);
    }
 }
