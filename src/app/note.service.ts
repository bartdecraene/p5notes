import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getUsers = () => {
    return this.http.get('https://p5backend.glitch.me/users');
  }

  addUser = (name: string) => {
    let data = { 'name': name };
    return this.http.post('https://p5backend.glitch.me/users', data);
  }

  deleteUser = (name: string) => {
    let options = {
      'params': { 'name': name }
    };
    return this.http.delete(
      'https://p5backend.glitch.me/users', options
    );
  }


  
  //'https://p5backend.glitch.me/users'
  //'http://glitch.com/~p5backend/users'
}
