import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MembersComponent} from './members/members.component';
import {FormsModule} from '@angular/forms';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RulesComponent } from './rules/rules.component';
import { EquipmentComponent } from './equipment/equipment.component';
import {RegistrationComponent} from "./registration/registration.component";
@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    MessagesComponent,
    HomeComponent,
    RulesComponent,
    EquipmentComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
