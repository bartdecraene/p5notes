import { Component, Input, EventEmitter, Output } from '@angular/core';
//import { appService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: any;
  @Output() deleted = new EventEmitter<string>();
  
  //constructor(private appService: appService){}

  onDeleteClick = () => {
    this.deleted.emit(this.user.name);
  }


}
