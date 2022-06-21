import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchbarComponent,
    VideoThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
