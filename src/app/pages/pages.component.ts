import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  constructor() { }
  part =  [{
    name: '',
    href: '',
    src: '/static/homelogo/logo-blue0.png'
  },
    {
      name: '',
      href: '',
      src: '/static/homelogo/logo-blue1.png'
    },
    {
      name: '',
      href: '',
      src: '/static/homelogo/logo-blue2.png'
    },
    {
      name: '',
      href: '',
      src: '/static/homelogo/logo-blue3.png'
    },
    {
      name: '',
      href: '',
      src: '/static/homelogo/logo-blue4.png'
    },
    {
      name: '',
      href: '',
      src: '/static/homelogo/logo-blue5.png'
    },
    {
      name: '',
      href: '',
      src: '/static/homelogo/logo-blue6.png'
    },
    {
      name: '',
      href: '',
      src: '/static/homelogo/logo-blue7.png'
    },
    {
      name: '',
      href: '',
      src: '/static/homelogo/logo-blue8.png'
    },
    {
      name: '',
      href: '',
      src: '/static/homelogo/logo-blue9.png'
    }
  ];
  ngOnInit() {
    console.log(this.part);
    //  练习 rxjs
    const source = Observable.create(observer => {
      observer.next('foo');
      observer.next('boo');
    });
    const source3 = Observable.create(observer => {
      observer.next('1');
      observer.next('2');
    });
    const source2 = new Subject<string>();

    source2.merge(source, source3).subscribe(value => { console.log('subject', value); });
    // source.take(1).subscribe(value => { console.log(value, 1); } );
    source2.next('5');
    // source2.next('2');
    // source2.complete();
    // source.subscribe(value => { console.log(value, 2); } );
   }
}
