import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'p5notes';
  users: string[];
  newName: string ="";

  constructor(private noteService: NoteService){}
  
  ngOnInit(){
    this.noteService.getUsers().subscribe((data: string[]) => {
      this.users = data;
    });
  }

  addUser = () => {
    this.noteService.addUser(this.newName).subscribe((result: any) => {
      let error = result.error;

      if (error) {
        console.log(`Error: ${error}`);
      } else {
        this.newName = "";
        this.noteService.getUsers().subscribe((data: string[]) => {
          this.users = data;
        });
      }
    });
  };

  deleteUser = (name: string) => {
    this.noteService.deleteUser(name).subscribe((result: any) => {
      console.log(result);

      this.noteService.getUsers().subscribe((data: string[]) => {
        this.users = data;
      });
    });
  };
}

