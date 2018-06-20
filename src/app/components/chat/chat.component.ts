import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chatService.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [`
#mario-chat{
  max-width: 600px;
  margin: 30px auto;
  border: 1px solid #ddd;
  box-shadow: 1px 3px 5px rgba(0,0,0,0.05);
  border-radius: 2px;
}

#chat-window{
  height: 400px;
  overflow: auto;
  background: #f9f9f9;
}

#output p{
  padding: 14px 0px;
  margin: 0 20px;
  border-bottom: 1px solid #e9e9e9;
  color: #555;
}

#feedback p{
  color: #aaa;
  padding: 14px 0px;
  margin: 0 20px;
}

#output strong{
  color: #575ed8;
}

label{
  box-sizing: border-box;
  display: block;
  padding: 10px 20px;
}

input{
  padding: 10px 20px;
  box-sizing: border-box;
  background: #eee;
  border: 0;
  display: block;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
  font-family: Nunito;
  font-size: 16px;
}

button{
  background: #e9afac;
  color: #fff;
  font-size: 18px;
  border: 0;
  padding: 12px 0;
  width: 100%;
  border-radius: 0 0 2px 2px;
}
  `]
})
export class ChatComponent implements OnInit, OnDestroy {

  messages = [];
  connection;
  message;
  name;

  constructor(private chatService:ChatService) {}

  sendMessage(){
    this.chatService.sendMessage({message: this.message,
      handle: this.name});
    this.message = '';
  }

  postMessage(){
    this.chatService.postMessage(this.name, this.message).subscribe(message => {
      alert("message posted to Facebook");
    });
  
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
