import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  getMembers(): Observable<Member[]> {
    const members = of(MEMBERS);
    this.messageService.add('MemberService: fetched members');
    return members;
  }
  constructor(private messageService: MessageService) { }
}
