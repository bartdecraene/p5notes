import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() note: any;
  @Output() deleted = new EventEmitter<string>();

  //constructor() { }


}

