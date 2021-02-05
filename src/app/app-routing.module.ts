import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../app/components/home/home.component';
import { ArtistsComponent} from '../app/components/artists/artists.component';
import { SongsComponent} from '../app/components/songs/songs.component';
import { SongslistComponent} from '../app/components/songslist/songslist.component';
import { UserComponent} from '../app/components/user/user.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
 },
 {
  path: 'artists',
  component: ArtistsComponent
 },
 {
  path: 'songs',
  component:SongsComponent
 },
 {
  path: 'songslist',
  component: SongslistComponent
 },
 {
  path: 'user',
  component: UserComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
