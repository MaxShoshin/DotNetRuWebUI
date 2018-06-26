import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatSidenavModule,
  MatDatepickerModule,
} from '@angular/material';

import * as moment from 'moment';
moment.locale('ru');
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { AppComponent } from './app.component';


import { NavMenuModule } from '@dotnetru/nav-menu';
import { ToolbarModule } from '@dotnetru/toolbar';

import { CommunityModule } from '@dotnetru/community';
import { MeetupModule, MeetupComponent } from '@dotnetru/meetup';
import { VenueEditorModule, VenueEditorComponent } from '@dotnetru/venue-editor';
import { FriendEditorModule, FriendEditorComponent } from './components/friend-editor';
import { PipesModule } from '@dotnetru/pipes';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'meetup', pathMatch: 'full' },
      { path: 'meetup', component: MeetupComponent },
      { path: 'venue', component: VenueEditorComponent },
      { path: 'friend', component: FriendEditorComponent },
      { path: '**', redirectTo: 'meetup' },
    ]),


    MatSidenavModule,
    MatDatepickerModule,
    MatMomentDateModule,


    NavMenuModule,
    ToolbarModule,

    PipesModule,
    CommunityModule,
    MeetupModule,
    VenueEditorModule,
    FriendEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
