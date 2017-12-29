import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'carousel-img',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.scss'],
  animations: [
    trigger('imgMove', [
      // 不显示
      /** 不显示 */
      state(
        'off',
        style({ display: 'none', 'z-index': '0', transform: 'translateX(0)' })
      ),
      /** 上一张图片 */
      state(
        'prev',
        style({
          'z-index': '1',
          transform: 'translateX(-100%)'
        })
      ),
      /** 下一张图片 */
      state('next', style({ 'z-index': '2', transform: 'translateX(100%)' })),
      /** 当前图片 */
      state('on', style({ 'z-index': '3', transform: 'translateX(0)' })),
      transition('prev=>on', [animate('0.3s ease-in')]),
      transition('next=>on', [animate('0.3s ease-in')]),
      transition('on=>prev', [animate('0.3s ease-in')]),
      transition('on=>next', [animate('0.3s ease-in')])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
