import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component'
import { HomeComponent } from './home/home.component'
import { FloodWarningsComponent } from './flood-warnings/flood-warnings.component'
import { FloodWarningDetailsComponent } from './flood-warning-details/flood-warning-details.component'
import { FloodAreaComponent } from './flood-area/flood-area.component'
import { AboutThisSiteComponent } from './about-this-site/about-this-site.component'

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        ThemeSwitcherComponent,
        HomeComponent,
        FloodWarningsComponent,
        FloodAreaComponent,
        FloodWarningDetailsComponent,
        AboutThisSiteComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'flood-warnings', component: FloodWarningsComponent },
            {
                path: 'flood-warning-details/:id',
                component: FloodWarningDetailsComponent
            },
            { path: 'flood-area', component: FloodAreaComponent },
            { path: 'about-this-site', component: AboutThisSiteComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]),
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
