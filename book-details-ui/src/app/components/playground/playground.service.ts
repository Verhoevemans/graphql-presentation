import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {
  
  private url = 'http://localhost:8080/graphql';
  
  constructor(private httpClient: HttpClient) {}
  
  sendGraphQLRequest(request: string): Observable<any> {
    const requestPayload = {"query": request};
    return this.httpClient.post(this.url, requestPayload);
  }
}
