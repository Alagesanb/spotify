import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artistForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private artistService: ArtistService) {

  }


  ngOnInit(): void {
    this.artistForm = this.fb.group({
      atristName: ['', Validators.required ],
      atristDob: ['', Validators.required ],
      atristBio: ['', Validators.required ]
    });
  }

  addArtist(artistValues) {
    this.submitted = true;
    artistValues.mode = 'Save'
    this.artistService.addArtist(artistValues)
    .subscribe(res => {
      console.log('created',res);
      alert("Created");
    });
    

   }

  onReset() {
    this.submitted = false;
    this.artistForm.reset();
  }


}
