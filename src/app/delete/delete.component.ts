import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  // variable to store incoming data from parent
  @Input() childAcno:String|undefined

  //event creation
  // event name
 @Output() onCancel=new EventEmitter
 @Output() onDelete=new EventEmitter

  constructor() { }

  ngOnInit(): void {
    
  }

  cancelDelete() {
this.onCancel.emit()  //emit method is used to start the event
  }

  deleteConf() {
    this.onDelete.emit(this.childAcno)
  }

}
