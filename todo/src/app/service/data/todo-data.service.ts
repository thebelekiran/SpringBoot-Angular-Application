import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username:string){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`)
    //console.log(" Execute Hello World Bean Service")
  }

  deleteTodo(username:string, id:number){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`)
    //console.log('delete todo called')
  }
  
  retrieveTodo(username:string, id:number){
    return this.http.get(`${API_URL}/users/${username}/todos/${id}`)
    //console.log('delete todo called')
  }

  updateTodo(username:string, id:number, todo: Todo){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo)
    //console.log('delete todo called')
  }
  
  createTodo(username:string, todo: Todo){
    return this.http.post(`${API_URL}/users/${username}/todos`, todo)
    //console.log('delete todo called')
  }

}
