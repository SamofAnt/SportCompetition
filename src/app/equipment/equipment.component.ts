import { Component, OnInit } from '@angular/core';
import {Equipment} from "../Equipment";
import {EquipmentService} from "../equipment.service";
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: Equipment[] = [];
  getEquipments(): void {
    this.equipmentService.getEquipments()
      .subscribe(equipment => this.equipments = equipment);
  }
  constructor(private equipmentService : EquipmentService) { }

  ngOnInit(): void {
    this.getEquipments();
  }

}
