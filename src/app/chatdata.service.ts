import { Injectable } from '@angular/core';
import { ChatbotService } from './chatbot.service';

interface Message{
  content:string,
  user:string
}

@Injectable({
  providedIn: 'root'
})

export class ChatdataService {

  constructor(private bot: ChatbotService) { }

  private _chatLog: Message[] = [];

  public enterUserMessage(message: string){
    const newMessage = {
      content: message,
      user: 'client'
    }

    // push to chat log
    this._chatLog.push(newMessage);

    // send to bot and get a response
    this.bot.promptWithMessage(message, this);

  }

  public enterBotMessage(message: string)
  {
    const newMessage = {
      content: message,
      user: 'agent'
    }

    // push to chat log
    this._chatLog.push(newMessage);
  }

  public appendLatestMessage(messageAppend: string)
  {
    // append message to the end of latest message in the chatlog

    // get the chatlog message
    let currentMessage = this._chatLog[this._chatLog.length - 1].content;

    // append message append to the end
    let newMessage  = currentMessage + messageAppend;

    // set the new content of the chatlog
    this._chatLog[this._chatLog.length - 1].content = newMessage;
  }

  public getChatLog(): any{
    return this._chatLog;
  }
}
