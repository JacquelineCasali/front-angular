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
      // 'Content-Type': 'applications/json'
      'X-CSRFToken',
      'csrftoken'
    )
    .set('Authorization', this.token);

  //  interação com a api
  constructor(private http: HttpClient) {}

  getMember(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'menbers/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
  // put atualizar o dado
  updateMember(menber: any): Observable<any> {
    let body = {
      name: menber.name,
      surname: menber.surname,
      phone: menber.phone,
      // photo: menber.photo,
    };

    return this.http.put(this.baseUrl + 'menbers/' + menber.id + '/', body, {
      headers: this.httpHeaders,
    });
  }
  // deletar membro
  deleteMember(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + 'menbers/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
}
