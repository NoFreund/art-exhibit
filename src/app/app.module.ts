import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageArtDetailsComponent } from './components/page-art-details/page-art-details.component';
import { PageArtListComponent } from './components/page-art-list/page-art-list.component';
import { PageDashboardComponent } from './components/page-dashboard/page-dashboard.component';
import { PageNewArtComponent } from './components/page-new-art/page-new-art.component';

import { FormsModule} from "@angular/forms";
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageArtDetailsComponent,
    PageArtListComponent,
    PageDashboardComponent,
    PageNewArtComponent,
    KpiCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
