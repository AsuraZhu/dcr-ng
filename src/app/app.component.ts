import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <dcr-foot></dcr-foot>
  `
  ,
})
export class AppComponent implements OnInit {
  products =  [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品,是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备'])
  ];
  title = 'app';
  ngOnInit(): void {
    console.log('初始化');

    const products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品,是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备'])
    ];

    console.log(products);
  }
}


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
