import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  members: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members.slice(1, 5));
  }

}
