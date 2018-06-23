import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { SidenavContentComponent } from './content/sidenav-content/sidenav-content.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { ResumeComponent } from './content/main-content/resume/resume.component';
import { ViewNewsComponent } from './content/main-content/view-news/view-news.component';
import { SingleNewsComponent } from './content/main-content/single-news/single-news.component';
import { FooterComponent } from './content/main-content/footer/footer.component';
import { ViewProfilesComponent } from './content/main-content/view-profiles/view-profiles.component';
import { SingleProfileItemComponent } from './content/main-content/view-profiles/single-profile-item/single-profile-item.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PassRecoveryComponent } from './pass-recovery/pass-recovery.component';
import { FullNewsComponent } from './content/main-content/full-news/full-news.component';
import { ProfileCardItenComponent } from './content/main-content/view-profiles/profile-card-iten/profile-card-iten.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidenavContentComponent,
    MainContentComponent,
    ResumeComponent,
    ViewNewsComponent,
    SingleNewsComponent,
    FooterComponent,
    ViewProfilesComponent,
    SingleProfileItemComponent,
    LoginComponent,
    SignupComponent,
    PassRecoveryComponent,
    FullNewsComponent,
    ProfileCardItenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
