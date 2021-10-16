import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Array<ITodo> = [];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this.todos
  );

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this.todos.length ? this.todos[0] : null
  );

  constructor() {}

  public getTodos(): Observable<Array<ITodo>> {
    if(!this._todoSubject.value.length){
      const todosString = localStorage.getItem('todos');
      if(todosString){
        const exitistingTodos: Array<ITodo> = JSON.parse(todosString);
        exitistingTodos[0].selected = true;
        this._todoSubject.next(exitistingTodos);
        this._singleTodoSubject.next(exitistingTodos[0]);
      }
    }

    return this._todoSubject.asObservable();
  }

  public getSeletedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }

  public addNewTodo(newTodo: ITodo): void {
    // take exiting todos
    // add new todos to exiting todos
    // trigger next tic in observable
    console.log(newTodo);
    const exitistingTodos: Array<ITodo> = this._todoSubject.value;
    exitistingTodos.push(newTodo);
    this._todoSubject.next(exitistingTodos);
    localStorage.setItem('todos', JSON.stringify(exitistingTodos))
  }

  public onTodoAction(todoId: string, action: string):void{
    const exitistingTodos: Array<ITodo> = this._todoSubject.value;

    const todoIndex = exitistingTodos.findIndex(
      (singleTodo) => singleTodo.id = todoId
    );
    exitistingTodos[todoIndex][action] = true;
    this._todoSubject.next(exitistingTodos);
    localStorage.setItem('todos', JSON.stringify(exitistingTodos));
  }
}
