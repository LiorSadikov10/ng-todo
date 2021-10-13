import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit { 

  @Input() todos: Array<ITodo> = [];


  constructor(private todoService: TodoService) { }


  ngOnInit(): void {

  }


  public onTodoClick(todo: ITodo, index: number):void{
    this.todoService.setSelectedTodo(todo);
    this.todos.forEach(todo => {
      if(todo.selected){
        todo.selected = false;
      }
    })
    this.todos[index].selected = true;
  }
}
