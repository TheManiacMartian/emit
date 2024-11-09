import { Component, OnInit } from '@angular/core';
import { ChatdataService } from '../chatdata.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {

  constructor(private data: ChatdataService){}

  public ChatLog: any;
  private _message: string = '';

  public get message(): string{
    return this._message;
  }

  public set message(value: string){
    this._message = value;
  }

  ngOnInit(): void {
    this.getChatLog();
  }

  private getChatLog(){
    this.ChatLog = this.data.getChatLog();
    console.log(this.ChatLog);
  }

  public onMessageFieldSubmit(evt:Event){
    evt.preventDefault(); 

    // return if message is empty
    if(this._message == '')
    {
      return;
    }

    this.data.enterUserMessage(this._message);
    this.getChatLog();

    // clear message
    this._message = '';
  }
}
