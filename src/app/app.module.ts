import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { SongsComponent } from './components/songs/songs.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { SongslistComponent } from './components/songslist/songslist.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ArtistService } from '../app/services/artist.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    SongsComponent,
    UserComponent,
    HomeComponent,
    SongslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
