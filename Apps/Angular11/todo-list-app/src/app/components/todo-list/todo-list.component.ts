import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { combineLatest, Observable } from 'rxjs';
import { ToDo } from 'src/app/shared/models/toDo.interface';
import { filter, map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)'}),
        animate(200, style({opacity: 1, transform: 'translateY(0px)'}))
      ]),
      transition(':leave', [
        animate(200, style({opacity: 0, transform: 'translateY(0px)'}))
      ])
    ])
  ]
})
export class TodoListComponent implements OnInit {

  todoTitle: string = '';

  todos$ = this.todoService.todos;
  filteredTodos$: Observable<ToDo[]>;
  filter: FormControl;
  filter$: Observable<string>;

  constructor(public todoService: TodoService) {
    this.filter = new FormControl('all');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredTodos$ = combineLatest(this.todos$, this.filter$).pipe(
      map(([todos, filterString]) => {
        if(filterString === 'all') {
          return todos;
        } else if (filterString === 'active') {
          return todos.filter(todo => !todo.completed);
        } else if (filterString === 'completed') {
          return todos.filter(todo => todo.completed);
        }
        return todos;
      })
    );
  }

  ngOnInit(): void {
  }

  addTodo(): void {
    if(this.todoTitle.trim().length === 0) {
      return;
    }
    this.todoService.addTodo(this.todoTitle, '');
    this.todoTitle = '';
  }
}
