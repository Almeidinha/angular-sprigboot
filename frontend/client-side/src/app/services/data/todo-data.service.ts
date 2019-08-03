import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoBean } from 'src/app/models/TodoBean';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/utils/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string): Observable<Array<TodoBean>> {
    return this.http.get<Array<TodoBean>>(`${API_URL}/users/${username}/todos/`);
  }

  remove(username: string, id: number): Observable<TodoBean> {
    return this.http.delete<TodoBean>(`${API_URL}/users/${username}/todos/${id}`)
  }

  retrieve(username: string, id: number): Observable<TodoBean> {
    return this.http.get<TodoBean>(`${API_URL}/users/${username}/todos/${id}`)
  }

  update(username: string, id: number, todo: TodoBean): Observable<TodoBean> {
    return this.http.put<TodoBean>(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  create(username: string, todo: TodoBean): Observable<void> {
    return this.http.post<void>(`${API_URL}/users/${username}/todos`, todo);
  }

}
