<<<<<<< HEAD
import { User } from './user';

export interface Message {
    msgId: number;
    from: User;
    to: User;
    time: Date;
    content: string;
=======
export interface Message {
    from: string;
    to: string;
    msg: string;
    time: Date;
    msgId: number;
>>>>>>> b8d79129f930c6cc0c3f119ae5eb23243a037f5d
}
