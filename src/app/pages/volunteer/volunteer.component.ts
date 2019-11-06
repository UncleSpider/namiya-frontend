import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { User } from 'src/app/interface/user';
=======
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit() {
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
  }

}
