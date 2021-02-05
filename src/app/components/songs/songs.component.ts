import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private artistService: ArtistService) {

  }

  ngOnInit(): void {
    this.songForm = this.fb.group({
      songName: ['', Validators.required ],
      releaseDate: ['', Validators.required ],
      coverImageURL: ['', Validators.required ]
    });
  }


  addSong(songValues) {
    this.submitted = true;
    songValues.mode = 'Save'
    this.artistService.AddSongs(songValues)
    .subscribe(res => {
      console.log('created',res);
      alert("Created");
    });
    

   }

  onReset() {
    this.submitted = false;
    this.songForm.reset();
  }

}
