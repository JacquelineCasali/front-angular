// liga o front com o back
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token 978185a672f6f77386f5e967c7914e4b4d27651a';
  httpHeaders = new HttpHeaders()
    .set(
      // 'Content-Type',
      // 'applications/json'
      'X-CSRFToken',
      'csrftoken'
    )
    .set('Authorization', this.token);
  //  interação com a api
  constructor(private http: HttpClient) {}
  getAllMembers(): Observable<any> {
    return this.http.get(this.baseUrl + 'menbers/', {
      headers: this.httpHeaders,
    });
  }
  getMember(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'menbers/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
  // metodo POST criar
  saveNewMember(member: any): Observable<any> {
    return this.http.post(this.baseUrl + 'menbers/', member, {
      headers: this.httpHeaders,
    });
  }
}
