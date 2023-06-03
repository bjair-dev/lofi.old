import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageIndexComponent } from 'src/pages/page-index/page-index.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxYoutubePlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
