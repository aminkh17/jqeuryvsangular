import { Message } from './Message';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  message: Message;
  Check: string;
  constructor() { this.Check = "Hell"; }

  show(message: string, failed: boolean = false){
    this.message = new Message(message, failed);
  }
}
