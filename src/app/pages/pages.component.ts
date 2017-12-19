import { Component, OnInit, TemplateRef, ElementRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  part =  [{
    name: '',
    href: '',
    src: '/assets/images/homelogo/logo-blue0.png'
  },
    {
      name: '',
      href: '',
      src: '/assets/images/homelogo/logo-blue1.png'
    },
    {
      name: '',
      href: '',
      src: '/assets/images/homelogo/logo-blue2.png'
    },
    {
      name: '',
      href: '',
      src: '/assets/images/homelogo/logo-blue3.png'
    },
    {
      name: '',
      href: '',
      src: '/assets/images/homelogo/logo-blue4.png'
    },
    {
      name: '',
      href: '',
      src: '/assets/images/homelogo/logo-blue5.png'
    },
    {
      name: '',
      href: '',
      src: '/assets/images/homelogo/logo-blue6.png'
    },
    {
      name: '',
      href: '',
      src: '/assets/images/homelogo/logo-blue7.png'
    },
    {
      name: '',
      href: '',
      src: '/assets/images/homelogo/logo-blue8.png'
    },
    {
      name: '',
      href: '',
      src: '/assets/images/homelogo/logo-blue9.png'
    }
  ];
  @ViewChild('src') src: ElementRef;
  ngOnInit() {
    console.log(this.part);
    //  练习 rxjs
    const source = Observable.create(observer => {
      observer.next('foo');
      observer.next('boo');
      observer.complete('完成');
    });
    const source3 = Observable.create(observer => {
      observer.next('1');
      observer.next('2');
    });
    const source2 = new Subject<string>();

    // source2.merge(source, source3).subscribe(value => { console.log('subject', value); });
    // source.take(1).subscribe(value => { console.log(value, 1); } );
    // source2.next('5');
    // source2.next('2');
    // source2.complete();
    // source.subscribe(value => { console.log(value, 2); } );
    source2.next('1');
    source2.next('2');
    // source2.complete();
    source2.subscribe(value => { console.log(value, 'not set'); } );
    source2.next('3');
    source2.next('4');
    source2.complete();
    source2.next('5');
    console.log('aaa');

    // setTimeout(function(){
    //   source2.subscribe(value => { console.log(value, 'setTimeout'); } );
    // } , 1000);


   }

   // mouseover 事件
   over(index, ev: Event): void {
      const elementRef = this.src.nativeElement;
      this.renderer.setAttribute(elementRef, 'src', '/assets/images/homelogo/logo-white' + index + '.png');
      // elementRef.setAttribute('src', '0.png');
      console.log(elementRef, 0);
      console.log(index, ev.target);
   }
   out(index, ev): void {
     console.log(index, ev);
   }
}
