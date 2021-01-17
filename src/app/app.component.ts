import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'p5notes';
  users: string[];
  newName: string ="";

  constructor(private appService: AppService){}
  
  ngOnInit(){
    this.appService.getUsers().subscribe((data: string[]) => {
      this.users = data;
    });
  }

  addUser = () => {
    this.appService.addUser(this.newName).subscribe((result: any) => {
      let error = result.error;

      if (error) {
        console.log(`Error: ${error}`);
      } else {
        this.newName = "";
        this.appService.getUsers().subscribe((data: string[]) => {
          this.users = data;
        });
      }
    });
  };

  deleteUser = (name: string) => {
    this.appService.deleteUser(name).subscribe((result: any) => {
      console.log(result);

      this.appService.getUsers().subscribe((data: string[]) => {
        this.users = data;
      });
    });
  };
}

