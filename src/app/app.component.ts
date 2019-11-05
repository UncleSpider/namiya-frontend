import { Component } from '@angular/core';
import { Resource } from './interface/resource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'namiya';
  routing: boolean = false;
  newsAndResources: Resource[] = [
    {
      'title': "危机热线汇总神马神马",
      'content': "1101110110111012012012 01201201201021020120 10209328 498734985629381703596823 08gagagagegeg ehahaha"
    },
    {
      'title': "写什么呢",
      'content': "反正也不是我看我就乱写吧哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"
    },
    {
      'title': "平台什么时候能上线鸭",
      'content': "编假数据真麻烦呀真麻烦，真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦真麻烦"
    }
  ];

  
}
