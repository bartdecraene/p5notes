import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getUsers = () => {
    return this.http.get('http://glitch.com/~p5backend/users');
  }

  
}
