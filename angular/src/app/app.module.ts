import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MessageService } from './message.service';
import { PeopleService } from './people.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ViewComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PeopleService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
