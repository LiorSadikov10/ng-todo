import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [{"title":"African fish eagle","description":"Haliaetus vocifer","isCompleted":false,"isArchived":false,"endDate":"2/27/2021"},
  {"title":"Downy woodpecker","description":"Picoides pubescens","isCompleted":true,"isArchived":true,"endDate":"1/12/2021"},
  {"title":"Hedgehog, south african","description":"Erinaceus frontalis","isCompleted":false,"isArchived":true,"endDate":"11/10/2020"},
  {"title":"White-fronted bee-eater","description":"Merops bullockoides","isCompleted":true,"isArchived":true,"endDate":"12/12/2020"},
  {"title":"Sloth, hoffman's","description":"Choloepus hoffmani","isCompleted":true,"isArchived":false,"endDate":"11/17/2020"},
  {"title":"Northern fur seal","description":"Callorhinus ursinus","isCompleted":true,"isArchived":true,"endDate":"7/19/2021"},
  {"title":"Greater sage grouse","description":"Centrocercus urophasianus","isCompleted":true,"isArchived":false,"endDate":"11/24/2020"},
  {"title":"Roe deer","description":"Capreolus capreolus","isCompleted":false,"isArchived":false,"endDate":"11/27/2020"},
  ]; 

  private _todoSubject : BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
    return this._todoSubject.asObservable()
  }
}
