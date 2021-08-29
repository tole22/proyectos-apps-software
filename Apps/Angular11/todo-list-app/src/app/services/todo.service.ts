import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToDo } from 'src/app/shared/models/toDo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  todoTitle: string = '';
 // idForTodo: number = 4;
  beforeEditCache: string = '';
  filter: string = 'all';
  anyRemainingModel: boolean = true;
  // todos: Array<ToDo> = [
  //   {
  //     'id': 1,
  //     'title': 'Finish Angular Screencast',
  //     'completed': false,
  //     'editing': false,
  //   },
  //   {
  //     'id': 2,
  //     'title': 'Take over world',
  //     'completed': false,
  //     'editing': false,
  //   },
  //   {
  //     'id': 3,
  //     'title': 'One more thing',
  //     'completed': false,
  //     'editing': false,
  //   },
  // ];

  todos!: Observable<ToDo[]>;

  private todoCollection: AngularFirestoreCollection<ToDo>;


  constructor(private readonly afs: AngularFirestore) { 
    this.todoCollection = afs.collection<ToDo>('todos');
    this.getTodos();
  }

  private getTodos(): void{
    this.todos = this.todoCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as ToDo))
    );
   }

  addTodo(todoTitle: string, todoId: string): Promise<void> {
    // if(todoTitle.trim().length === 0) {
    //   return;
    // }

    return new Promise(async (resolve, reject) => {
      try {
        const id = todoId || this.afs.createId();
        const data = {
          id: id,
          title: todoTitle,
          completed: false,
          editing: false
        };
        const result = await this.todoCollection.doc(id).set(data);
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    });
  };

  deleteTodo(id: string): Promise<void>{
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.todoCollection.doc(id).delete();
        resolve(result);
      } catch (error) {
        reject(error.message);
      }
    })
  };

  // editTodo(todo: ToDo): void {
  //   this.beforeEditCache = todo.title;
  //   todo.editing = true;
  // }

  // doneEdit(todo: ToDo): void {
  //   if (todo.title.trim().length === 0) {
  //     todo.title = this.beforeEditCache;
  //   }
  //   todo.editing = false;
  // }

  // cancelEdit(todo: ToDo): void {
  //   todo.title = this.beforeEditCache;
  //   todo.editing = false;
  // }

  // remaining(): number {
  //   return this.todos.filter(todo => !todo.completed).length;
  // }

  // atLeastOneCompleted(): boolean {
  //   return this.todos.filter(todo => todo.completed).length > 0;
  // }

  // clearCompleted(): void {
  //   this.todos = this.todos.filter(todo => !todo.completed);
  // }

  // checkAllTodos(): void {
  //  this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event!.target).checked)
  // }
}
