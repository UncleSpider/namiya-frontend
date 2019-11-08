import { User } from './user';

export interface Message {
    msgId: number;
    from: User;
    to: User;
    time: Date;
    content: string;
}
