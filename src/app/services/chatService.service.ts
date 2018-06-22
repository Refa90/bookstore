import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChatService {
  private url = 'http://localhost:4001';  
  private socket;

  constructor(private http: HttpClient){

  }
  
  sendMessage(message){
    this.socket.emit('chat', message);    
  }

  postMessage(userName, message){
    let uri = 'https://graph.facebook.com/202393100576186/feed?message=' + userName + ": " + message + '&access_token=EAACEdEose0cBALo7jZCt6o9jcmdjAAuk9jZBKi5glQPSjS7o1Ut06LaFpbzhpZBLTYHiHcMxjCqVls4NJ3IX0NRzUhSS3ys7PtoTEkdW94oLsgzAC0SMVia8VHmEvCW0gO5tmm8950EInJqvala7UoXCP5aqqZBg4wkKbkeeF8mjQuLp2H9ZCZCdVUicEZA9TbHInSr5nWBnAZDZD';
        return this
                .http
                .post(uri, null)
                .map((res : string) => {
                  return res;
                });
  }
  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('chat', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}