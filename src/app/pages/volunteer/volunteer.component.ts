import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

  clients: User[];
  activeClient: number;


  constructor() { }

  ngOnInit() {
    this.clients = [
      {
        'userId': 1,
        'name': "鸭鸭",
      },
      {
        'userId': 2,
        'name': "嘟嘟",
      }
    ];
  }

  changeActiveClient(p): void {

    console.log(p);
  }

}
