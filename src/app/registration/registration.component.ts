import { Component, OnInit } from '@angular/core';
import {MemberService} from "../member.service";
import {Member} from '../member';
import {subscribeOn} from "rxjs";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  members: Member[] = [];
  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }
  firstName? : string;
  lastName? :string;
  birthday?: Date;
  phone? : string;
  email? : string;
  constructor(private memberService : MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }
  OnRegister():void{
    this.firstName = this.firstName?.trim();
    this.lastName = this.lastName?.trim();
    this.phone = this.phone?.trim();
    this.email = this.email?.trim();
    if(!this.firstName || !this.lastName || !this.phone || !this.email) {return;}
    let newMember = {
      firstName : this.firstName,
      lastName : this.lastName,
      phone : this.phone,
      birthday : this.birthday,
      email : this.email
    }
    this.memberService.addMember(newMember as Member);
  }
}
