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
    let uri = 'https://graph.facebook.com/202393100576186/feed?message=' + userName + ": " + message + '&access_token=EAAFYH8mUqm4BABurut1IFM37uH7E5QUWU22aevsZCP14rDHZCTybxcWziSEW0mxsPCHlgt7hHIBYVUBBCNUCAZCzhWixFQJWsUuZBJcJSoLrHaRBTelcWzGfGfaKpwMdQS3DAfGP7t7IiLuZBIEPx3gLLCFKjvPuO90oiSArDWqPw89MDEZAZCrL2vd95NxtN8ZD';
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