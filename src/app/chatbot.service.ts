import { Injectable } from '@angular/core';
import { ChatdataService } from './chatdata.service';
import { OpenAI } from 'openai'
import { environment } from '../environments/environment';

const openai = new OpenAI({
  apiKey: environment.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});


async function promptAI(prompt:string, chatData: ChatdataService) {
  const stream = await openai.beta.chat.completions.stream({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user', content: prompt
    }],
    stream: true
  });

  // enter blank bot message to start
  chatData.enterBotMessage('');

  // add content as it is streamed
  stream.on('content', (delta, snapshot) => {
    chatData.appendLatestMessage(`${delta}`);
  });
  
  
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }

  
  public promptWithMessage(prompt: string, chatData: ChatdataService)
  {
    // here we go through and send to the chatdata a response from this bot
    promptAI(prompt, chatData);

  }

  
}
