import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom, map } from 'rxjs';

import { Duyuru } from '../../model/duyuru.interface';
@Injectable({
  providedIn: 'root'
})
export class DuyuruService {
  private apiUrl = 'http://localhost:8080/api/duyurular'; 

  constructor(private http: HttpClient) { }

  getAllDuyurular(): Observable<Duyuru[]> {
    return this.http.get<Duyuru[]>(this.apiUrl);
  }

  getDuyuruById(id: number): Observable<Duyuru> {
    return this.http.get<Duyuru>(`${this.apiUrl}/${id}`);
  }

  createDuyuru(file: File,duyuru: Duyuru): Observable<void> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('duyuru', JSON.stringify(duyuru)); 
    const headers = new HttpHeaders({
      enctype: 'multipart/form-data' 
    });
    return this.http.post<void>(this.apiUrl, formData, { headers: headers });
  }

  updateDuyuru(id: number, file: File, duyuru: Duyuru): Observable<void> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('duyuru', JSON.stringify(duyuru)); 
    const headers = new HttpHeaders({
      enctype: 'multipart/form-data' 
    });
    return this.http.put<void>(`${this.apiUrl}/${id}`, formData, { headers: headers });
  }

  deleteDuyuru(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getImage(dosyaAdi: string): Observable<any> {
    const url = `${this.apiUrl}/resim/${dosyaAdi}`;
    return this.http.get(url, { responseType: 'text' });
  }

  

}
