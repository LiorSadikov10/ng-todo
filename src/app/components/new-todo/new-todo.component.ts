import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(public dialog: MatDialog, private todoService: TodoService) {}

  ngOnInit(): void {}

  public onNewTodoSubmit(): void {
    // create the new todo obj
    // send object to service
    if (this.form.valid) {
      const formValues = this.form.form.value;

      const newTodo: ITodo = {
        id: uuidv4(),
        title: formValues.title,
        description: formValues.description,
        endDate: formValues.date,
        isCompleted: false,
        isArchived: false,
        selected: false,
      };

      this.todoService.addNewTodo(newTodo);
      this.dialog.closeAll();
    }
  }
}
