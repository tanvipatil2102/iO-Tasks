import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss']
})
export class TodoListsComponent implements OnInit {

  @Input()
  getTodos!: Array<Itodo>;
  constructor() { }

  ngOnInit(): void {
  }

}
