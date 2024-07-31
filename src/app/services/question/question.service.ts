import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    const headers = new HttpHeaders().set('X-Master-Key', this.apiKey);
    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
