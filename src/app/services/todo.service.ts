import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [{id:1, "title":"African fish eagle","description":"Haliaetus vocifer","isCompleted":false,"isArchived":false,"endDate":"2/27/2021",selected:true},
  {id:2, "title":"Downy woodpecker","description":"Picoides pubescens","isCompleted":false,"isArchived":true,"endDate":"1/12/2021",selected:false},
  {id:3, "title":"Hedgehog, south african","description":"Erinaceus frontalis","isCompleted":false,"isArchived":true,"endDate":"11/10/2020",selected:false},
  {id:4, "title":"White-fronted bee-eater","description":"Merops bullockoides","isCompleted":false,"isArchived":true,"endDate":"12/12/2020",selected:false},
  {id:5, "title":"Sloth, hoffman's","description":"Choloepus hoffmani","isCompleted":false,"isArchived":false,"endDate":"11/17/2020",selected:false},
  {id:6, "title":"Northern fur seal","description":"Callorhinus ursinus","isCompleted":false,"isArchived":true,"endDate":"7/19/2021",selected:false},
  {id:7, "title":"Greater sage grouse","description":"Centrocercus urophasianus","isCompleted":false,"isArchived":false,"endDate":"11/24/2020",selected:false},
  {id:8, "title":"Roe deer","description":"Capreolus capreolus","isCompleted":false,"isArchived":false,"endDate":"11/27/2020",selected:false},
  ]; 

  private _todoSubject : BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }

  public getSeletedTodo(): Observable<ITodo>{
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo){
    this._singleTodoSubject.next(todo);
  }
}
