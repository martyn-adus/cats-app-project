import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private baseUrl = 'https://api.thecatapi.com/v1';
  private apiKey = 'live_zSnSyiBbJWt9p8CIEgYu8mXgVEgaBJXHefqomxLproCpjw7OoQsIulpf7TrQmydt';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    return this.http.get(`${this.baseUrl}/breeds`);
  }

  getCats(limit: number, breedId?: string): Observable<any> {
    let url = `${this.baseUrl}/images/search?limit=${limit}&api_key=${this.apiKey}`;
    if (breedId) {
      url += `&breed_ids=${breedId}`;
    }
    return this.http.get(url);
  }
}
