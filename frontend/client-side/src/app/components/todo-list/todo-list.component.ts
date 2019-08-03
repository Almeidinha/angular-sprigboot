import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/data/todo-data.service';
import { TodoBean } from 'src/app/models/TodoBean';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<TodoBean>;
  message: string;
  

  constructor(
    private service: TodoDataService,
    private router: Router 
    ) { }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos(): void {
    this.service.retrieveAllTodos('Almeida').subscribe(
      data => this.todos = data
    );
  }

  removeTodo(id: number): void {
    this.service.remove('Almeida', id).subscribe(
      data => {
        this.message = `Todo ${id} deleted successfully!!!`;
        this.loadTodos();
      }
    );
  }

  updateTodo(id): void {
    this.router.navigate(['todos', id]);
  }

  addTodo(): void {
    this.router.navigate(['todos', -1])
  }

}
