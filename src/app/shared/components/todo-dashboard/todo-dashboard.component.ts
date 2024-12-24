import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todoArray : Array<Itodo> = [
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getEventOfTodo(todo : Itodo){
    this.todoArray.push(todo);
  }
}
