import {Component, OnInit} from '@angular/core';
import {Member} from '../member';
import {MEMBERS} from '../mock-members';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];
  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }
  add(lastName: string): void {
    lastName = lastName.trim();
    if (!lastName) { return; }
    this.memberService.addMember({ lastName } as Member)
      .subscribe(member => {
        this.members.push(member);
      });
  }
  delete(member: Member): void {
    this.members = this.members.filter(h => h !== member);
    this.memberService.deleteMember(member.id).subscribe();
  }
  constructor(private memberService: MemberService) {
  }

  ngOnInit(): void {
    this.getMembers();
  }

}
