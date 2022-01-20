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
  selectedMember?: Member;
  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }
  constructor(private memberService: MemberService, private messageService: MessageService) {
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
    this.messageService.add(`MembersComponent: Selected member id=${member.id}`);
  }

  ngOnInit(): void {
    this.getMembers();
  }

}
