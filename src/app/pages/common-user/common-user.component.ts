
import { Component, OnInit } from '@angular/core';
import { Message } from '../../interface/message';
import { User } from 'src/app/interface/user';

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
  A: User = {
    'userId': 1,
    'name': "鸭鸭",
  }
  B: User = {
    'userId': 2,
    'name': "嘟嘟",
  }

  constructor() { }

  ngOnInit() {
    
    
    this.msgList = [
      {
        from: this.A,
        to: this.B,
        content: 'hahahh',
        time: new Date(),
        msgId: 1
      },
      {
        from: this.B,
        to: this.A,
        content: 'gegege',
        time: new Date(),
        msgId: 2
      },
      {
        from: this.A,
        to: this.B,
        content: 'hahahh',
        time: new Date(),
        msgId: 3
      },
      {
        from: this.B,
        to: this.A,
        content: 'gegege',
        time: new Date(),
        msgId: 4
      },
      {
        from: this.A,
        to: this.B,
        content: 'hahahh',
        time: new Date(),
        msgId: 5
      },
      {
        from: this.B,
        to: this.A,
        content: 'gegege',
        time: new Date(),
        msgId: 6
      },
      {
        from: this.A,
        to: this.B,
        content: 'hahahh',
        time: new Date(),
        msgId: 7
      },
      {
        from: this.B,
        to: this.A,
        content: 'gegege',
        time: new Date(),
        msgId: 8
      },
      {
        from: this.A,
        to: this.B,
        content: 'hahahh',
        time: new Date(),
        msgId: 9
      },
      {
        from: this.B,
        to: this.A,
        content: 'gegege',
        time: new Date(),
        msgId: 10
      },
      {
        from: this.A,
        to: this.B,
        content: 'hahahh',
        time: new Date(),
        msgId: 11
      },
      {
        from: this.B,
        to: this.A,
        content: 'gegege',
        time: new Date(),
        msgId: 12
      },
      {
        from: this.A,
        to: this.B,
        content: 'hahahh',
        time: new Date(),
        msgId: 13
      },
      {
        from: this.B,
        to: this.A,
        content: 'gegege',
        time: new Date(),
        msgId: 14
      },
      {
        from: this.A,
        to: this.B,
        content: 'hahahh',
        time: new Date(),
        msgId: 15
      },
      {
        from: this.B,
        to: this.A,
        content: 'gegege',
        time: new Date(),
        msgId: 16
      },
      {
        from: this.A,
        to: this.B,
        content: 'hahahh',
        time: new Date(),
        msgId: 17
      },
      {
        from: this.B,
        to: this.A,
        content: 'gegege',
        time: new Date(),
        msgId: 18
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
          content: this.msgList[pi*5+index-5].content,
          time: this.msgList[pi*5+index-5].time,
          msgId: this.msgList[pi*5+index-5].msgId
        };
      });
    }
    
    console.log(this.msgList[pi*5])
  }

}
