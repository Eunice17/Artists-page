import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class metalerosService {
  constructor(private http: HttpClient) { }

  url = environment.url;

  public getMetaleros(): Observable<any> {
    return this.http.get(`${this.url}/artistas.json`);
  }
}