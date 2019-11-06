
import { Component, OnInit } from '@angular/core';
import { Message } from '../../interface/message';
<<<<<<< HEAD
import { User } from 'src/app/interface/user';
=======
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d

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
<<<<<<< HEAD
  A: User = {
    'userId': 1,
    'name': "鸭鸭",
  }
  B: User = {
    'userId': 2,
    'name': "嘟嘟",
  }
=======
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d

  constructor() { }

  ngOnInit() {
    
    
    this.msgList = [
      {
<<<<<<< HEAD
        from: this.A,
        to: this.B,
        content: 'hahahh',
=======
        from: 'a',
        to: 'b',
        msg: 'hahahh',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 1
      },
      {
<<<<<<< HEAD
        from: this.B,
        to: this.A,
        content: 'gegege',
=======
        from: 'b',
        to: 'a',
        msg: 'gegege',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 2
      },
      {
<<<<<<< HEAD
        from: this.A,
        to: this.B,
        content: 'hahahh',
=======
        from: 'a',
        to: 'b',
        msg: 'hahahh',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 3
      },
      {
<<<<<<< HEAD
        from: this.B,
        to: this.A,
        content: 'gegege',
=======
        from: 'b',
        to: 'a',
        msg: 'gegege',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 4
      },
      {
<<<<<<< HEAD
        from: this.A,
        to: this.B,
        content: 'hahahh',
=======
        from: 'a',
        to: 'b',
        msg: 'hahahh',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 5
      },
      {
<<<<<<< HEAD
        from: this.B,
        to: this.A,
        content: 'gegege',
=======
        from: 'b',
        to: 'a',
        msg: 'gegege',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 6
      },
      {
<<<<<<< HEAD
        from: this.A,
        to: this.B,
        content: 'hahahh',
=======
        from: 'a',
        to: 'b',
        msg: 'hahahh',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 7
      },
      {
<<<<<<< HEAD
        from: this.B,
        to: this.A,
        content: 'gegege',
=======
        from: 'b',
        to: 'a',
        msg: 'gegege',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 8
      },
      {
<<<<<<< HEAD
        from: this.A,
        to: this.B,
        content: 'hahahh',
=======
        from: 'a',
        to: 'b',
        msg: 'hahahh',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 9
      },
      {
<<<<<<< HEAD
        from: this.B,
        to: this.A,
        content: 'gegege',
=======
        from: 'b',
        to: 'a',
        msg: 'gegege',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 10
      },
      {
<<<<<<< HEAD
        from: this.A,
        to: this.B,
        content: 'hahahh',
=======
        from: 'a',
        to: 'b',
        msg: 'hahahh',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 11
      },
      {
<<<<<<< HEAD
        from: this.B,
        to: this.A,
        content: 'gegege',
=======
        from: 'b',
        to: 'a',
        msg: 'gegege',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 12
      },
      {
<<<<<<< HEAD
        from: this.A,
        to: this.B,
        content: 'hahahh',
=======
        from: 'a',
        to: 'b',
        msg: 'hahahh',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 13
      },
      {
<<<<<<< HEAD
        from: this.B,
        to: this.A,
        content: 'gegege',
=======
        from: 'b',
        to: 'a',
        msg: 'gegege',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 14
      },
      {
<<<<<<< HEAD
        from: this.A,
        to: this.B,
        content: 'hahahh',
=======
        from: 'a',
        to: 'b',
        msg: 'hahahh',
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
        time: new Date(),
        msgId: 15
      },
      {
<<<<<<< HEAD
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
=======
        from: 'b',
        to: 'a',
        msg: 'gegege',
        time: new Date(),
        msgId: 16
      },
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
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
<<<<<<< HEAD
          content: this.msgList[pi*5+index-5].content,
=======
          msg: this.msgList[pi*5+index-5].msg,
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
          time: this.msgList[pi*5+index-5].time,
          msgId: this.msgList[pi*5+index-5].msgId
        };
      });
    }
    
    console.log(this.msgList[pi*5])
  }

}
