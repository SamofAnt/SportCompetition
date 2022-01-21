import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import {RulesComponent} from "./rules/rules.component";
import {EquipmentComponent} from "./equipment/equipment.component";

const routes: Routes = [
  { path: 'detail/:id', component: MemberDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'members', component: MembersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'equipment', component: EquipmentComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
