
import { Component, OnInit } from '@angular/core';
import { Message } from '../../interface/message';

@Component({
  selector: 'app-common-user',
  templateUrl: './common-user.component.html',
  styleUrls: ['./common-user.component.scss']
})
export class CommonUserComponent implements OnInit {
  msgShown: Message[];
  msgList: Message[];
  inputMessage: string;
  changeVisible: boolean = false;
  burning: boolean = false;

  constructor() { }

  ngOnInit() {
    
    
    this.msgList = [
      {
        from: 'a',
        to: 'b',
        msg: 'hahahh',
        time: new Date(),
        msgId: 1
      },
      {
        from: 'b',
        to: 'a',
        msg: 'gegege',
        time: new Date(),
        msgId: 2
      },
      {
        from: 'a',
        to: 'b',
        msg: 'hahahh',
        time: new Date(),
        msgId: 3
      },
      {
        from: 'b',
        to: 'a',
        msg: 'gegege',
        time: new Date(),
        msgId: 4
      },
      {
        from: 'a',
        to: 'b',
        msg: 'hahahh',
        time: new Date(),
        msgId: 5
      },
      {
        from: 'b',
        to: 'a',
        msg: 'gegege',
        time: new Date(),
        msgId: 6
      },
      {
        from: 'a',
        to: 'b',
        msg: 'hahahh',
        time: new Date(),
        msgId: 7
      },
      {
        from: 'b',
        to: 'a',
        msg: 'gegege',
        time: new Date(),
        msgId: 8
      },
      {
        from: 'a',
        to: 'b',
        msg: 'hahahh',
        time: new Date(),
        msgId: 9
      },
      {
        from: 'b',
        to: 'a',
        msg: 'gegege',
        time: new Date(),
        msgId: 10
      },
      {
        from: 'a',
        to: 'b',
        msg: 'hahahh',
        time: new Date(),
        msgId: 11
      },
      {
        from: 'b',
        to: 'a',
        msg: 'gegege',
        time: new Date(),
        msgId: 12
      },
      {
        from: 'a',
        to: 'b',
        msg: 'hahahh',
        time: new Date(),
        msgId: 13
      },
      {
        from: 'b',
        to: 'a',
        msg: 'gegege',
        time: new Date(),
        msgId: 14
      },
      {
        from: 'a',
        to: 'b',
        msg: 'hahahh',
        time: new Date(),
        msgId: 15
      },
      {
        from: 'b',
        to: 'a',
        msg: 'gegege',
        time: new Date(),
        msgId: 16
      },
    ];
    this.loadData(1);
    // console.log(this.msgList.length)
  }

  showChange(): void {
    this.changeVisible = true;
  }

  cancelChange(): void {
    this.changeVisible = false;
  }

  showBurn(): void {
    this.burning = true;
  }

  loadData(pi: number): void {
    console.log(typeof this.msgList.length)
    let temp = Math.floor(this.msgList.length / 5);
    if (pi === temp + 1) {
      this.msgShown = this.msgList.slice(5*temp);
    } else {
      this.msgShown = new Array(5).fill({}).map((_, index) => {
        return {
          // from: "aaa",
          // to: "aaa",
          // msg: "aaa",
          // time: new Date(),
          // msgId: 0,
          from: this.msgList[pi*5+index-5].from,
          to: this.msgList[pi*5+index-5].to,
          msg: this.msgList[pi*5+index-5].msg,
          time: this.msgList[pi*5+index-5].time,
          msgId: this.msgList[pi*5+index-5].msgId
        };
      });
    }
    
    console.log(this.msgList[pi*5])
  }

}
