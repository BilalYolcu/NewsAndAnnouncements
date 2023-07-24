import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Haber } from '../../model/haber.interface';


@Injectable({
  providedIn: 'root'
})
export class HaberService {
  private apiUrl = 'http://localhost:8080/api/haberler'; 

  constructor(private http: HttpClient) { }

  getAllHaberler(): Observable<Haber[]> {
    return this.http.get<Haber[]>(this.apiUrl);
  }

  getHaberById(id: number): Observable<Haber> {
    return this.http.get<Haber>(`${this.apiUrl}/${id}`);
  }

  createHaber(haber: Haber): Observable<void> {
    return this.http.post<void>(this.apiUrl, haber);
  }

  updateHaber(id: number, haber: Haber): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, haber);
  }

  deleteHaber(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
