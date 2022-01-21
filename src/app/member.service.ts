import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private membersUrl = 'api/members';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl)
      .pipe(
        catchError(this.handleError<Member[]>('getMembers', []))
      );
  }
  getMember(id: number): Observable<Member> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get<Member>(url).pipe(
      tap(_ => this.log(`fetched member id=${id}`)),
      catchError(this.handleError<Member>(`getMember id=${id}`))
    );
  }
  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersUrl, member, this.httpOptions).pipe(
      tap(_ => this.log(`updated member id=${member.id}`)),
      catchError(this.handleError<any>('updateMember'))
    );
  }
  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.membersUrl, member, this.httpOptions).pipe(
      //tap((newMember: Member) => this.log(`added member w/ id=${newMember.id}`)),
      catchError(this.handleError<Member>('addMember'))
    );
  }
  deleteMember(id: number): Observable<Member> {
    const url = `${this.membersUrl}/${id}`;

    return this.http.delete<Member>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted member id=${id}`)),
      catchError(this.handleError<Member>('deleteMember'))
    );
  }
  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }
  constructor(private http: HttpClient,
              private messageService: MessageService) { }
}
