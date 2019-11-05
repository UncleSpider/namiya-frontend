import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {

  volunteer: string = "可达鸭";
  showParagraph: boolean;

  constructor() { }

  ngOnInit() {
  }

  changeShowParagraph(): void {
    this.showParagraph = !this.showParagraph;
  }

}
