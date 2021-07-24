import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id : number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message : string

  //structured format.
  todos : Todo[]
  // todos =[
  //   new Todo(1,'learn to dance', false, new Date()),
  //   new Todo(2,'Become an expert at Angular', false, new Date()),
  //   new Todo(3,'Visit US', false, new Date()),
  // ]

  //unstructured format.
  // todos = [{ id : 1, description : 'Learn to dance' },
  // { id : 2, description : 'Become an expert at Angular' },
  // { id : 3, description : 'Visit US' }]

  // todo = { id : 1, description : 'Learn to dance' }

  constructor(
    private router: Router,
    private todoservice: TodoDataService
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoservice.retrieveAllTodos('kiran').subscribe(
      response => {
        console.log(response)
        this.todos = response;
      }
    )
  }

  deleteTodo(id:number){
    //console.log(`delete todo ${id}`)
    this.todoservice.deleteTodo('kiran',id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of TODO ${id} is Successfull`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id:number){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
