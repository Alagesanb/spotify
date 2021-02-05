import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private artistService: ArtistService) {

  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userName: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  addUser(userValues) {
    this.submitted = true;
    userValues.mode = 'Save'
    this.artistService.saveUser(userValues)
    .subscribe(res => {
      console.log('created',res);
      alert("Created");
    });
    

   }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }


}
