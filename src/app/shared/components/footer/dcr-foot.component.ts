
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dcr-foot',
  templateUrl: './dcr-foot.component.html',
  styleUrls: ['./dcr-foot.component.scss']
})
export class DcrFootComponent implements OnInit {
  constructor() { }
  list =  [{
    name: '关于我们', url: '',
}, {
    name: '使用教程', url: '',
}, {
    name: '常见问题', url: '',
}, {
    name: '工具下载', url: '',
}, {
    name: '服务协议', url: '',
}];
  ngOnInit() { }
}
