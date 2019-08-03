import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/data/todo-data.service';
import { TodoBean } from 'src/app/models/TodoBean';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: TodoBean;

  constructor(
    private service: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.todo = new TodoBean();
    this.id = this.route.snapshot.params['id'];
    
    if (+this.id ===  -1) {
      this.todo.$targetDate = new Date();
      this.todo.$userName = "Almeida";
      this.todo.$isDone = false;
    } else {
      this.service.retrieve("Almeida", this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  save() {
    if (+this.id ===  -1) {
      this.service.create("Almeida", this.todo).subscribe(
        data => this.router.navigate(['/todos'])
      );
    } else {
      this.service.update('Almeida', this.id, this.todo).subscribe(
        data => this.router.navigate(['/todos'])
      );
    }
    
  }

}
