import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from './member';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const members = [
      {
        id: 1,
        firstName: "Anton",
        lastName: "Samofalov",
        birthday: new Date("2002-05-28"),
        email: "samofalov.20022805@gmail.com",
        phone: "+79153560898"
      },
      {
        id: 2,
        firstName: "Ilya",
        lastName: "Petrov",
        birthday: new Date("2003-05-28"),
        email: "petrov.20032805@gmail.com",
        phone: "+79153560898"
      },
      {
        id: 3,
        firstName: "Michail",
        lastName: "Popov",
        birthday: new Date("2000-05-28"),
        email: "popov.20002805@gmail.com",
        phone: "+79153560898"
      },
      {
        id: 4,
        firstName: "Petr",
        lastName: "Ivanov",
        birthday: new Date("1995-05-28"),
        email: "ivanov.19952805@gmail.com",
        phone: "+79153560898"
      }
  ];
    const equipments = [
      {
        id : 1,
        name: "Поясная сумка"
      },
      {
        id:2,
        name : "Очки"
      },
      {
        id:3,
        name: "Велосипед"
      }
    ]
    return {members, equipments};
  }
  genId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 11;
  }
  constructor() { }
}
