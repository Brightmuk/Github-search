import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileService } from './services/profile.service';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ReposComponent } from './repos/repos.component';
import { DateCountPipe } from './date-count.pipe';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';
import {RoutingModule} from './routing/routing.module'

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    ReposComponent,
    DateCountPipe,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
