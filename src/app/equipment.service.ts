import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Equipment } from './Equipment';
@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private membersUrl = 'api/equipments';
  getEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.membersUrl)
      .pipe(
        catchError(this.handleError<Equipment[]>('getEquipments', []))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`Equipment Service: ${message}`);
  }
  constructor(private http: HttpClient,
              private messageService: MessageService) { }
}
