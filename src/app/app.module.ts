import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component'
import { HomeComponent } from './home/home.component'
import { FloodWarningsComponent } from './flood-warnings/flood-warnings.component'
import { FloodWarningDetailsComponent } from './flood-warning-details/flood-warning-details.component'
import { FloodHistoryComponent } from './flood-history/flood-history.component'
import { MeasurementStationsComponent } from './measurement-stations/measurement-stations.component'
import { AboutThisSiteComponent } from './about-this-site/about-this-site.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeSwitcherComponent,
    HomeComponent,
    FloodWarningsComponent,
    FloodHistoryComponent,
    FloodWarningDetailsComponent,
    MeasurementStationsComponent,
    AboutThisSiteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'flood-warnings', component: FloodWarningsComponent },
      {
        path: 'flood-warning-details/:id',
        component: FloodWarningDetailsComponent
      },
      { path: 'flood-history', component: FloodHistoryComponent },
      {
        path: 'measurement-stations',
        component: MeasurementStationsComponent
      },
      { path: 'about-this-site', component: AboutThisSiteComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
