import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-songslist',
  templateUrl: './songslist.component.html',
  styleUrls: ['./songslist.component.css']
})
export class SongslistComponent implements OnInit {
  songData;
  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.GetSongs().subscribe(data =>  this.songData = data);
  }

  edit(song){
    this.artistService.AddSongs(song)
  }

  delete(song){
    this.artistService.deleteSong(song)
  }
}
