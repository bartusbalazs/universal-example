import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TournamentGroupComponent } from './tournament-group/components/tournament-groups/tournament-group.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamButtonDirective } from './directives/team-button.directive';
import {TeamService} from "./services/team.service";
import {HttpClientModule} from "@angular/common/http";
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import {isPlatformBrowser} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TeamButtonDirective,
    MessagesComponent,
    PageNotFoundComponent,
    ReactiveFormDemoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'world-cup-2022' }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }

}
