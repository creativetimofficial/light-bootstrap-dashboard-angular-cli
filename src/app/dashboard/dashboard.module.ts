import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { UserComponent } from './user/user.component';
import { MapsComponent } from './maps/maps.component';
import { TypographyComponent } from './typography/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TablesComponent } from './tables/tables.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'user', component: UserComponent },
  { path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'maps', component: MapsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'table', component: TablesComponent },

];

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    IconsComponent,
    UserComponent,
    TypographyComponent,
    NotificationsComponent,
    TablesComponent,
    MapsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
],
exports: [
    DashboardComponent
  ]
  // providers: [],
  // bootstrap: [DashboardComponent]
})
export class DashboardModule { }
