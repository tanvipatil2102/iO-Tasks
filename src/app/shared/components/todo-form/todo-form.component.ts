import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EventListenerObject } from 'rxjs/internal/observable/fromEvent';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor() { }
  @ViewChild("todoItem") todoItem !: ElementRef;
  @Output() emitEventTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>;

  ngOnInit(): void {
  }

  generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};

  onTodoBtn(){
    let obj = {
      todoItem : this.todoItem.nativeElement.value,
      id : this.generateUuid()
    }

    this.todoItem.nativeElement.value = '';

    this.emitEventTodo.emit(obj);
  }

}
