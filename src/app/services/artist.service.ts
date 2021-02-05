import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export default class Artist {
  id: string;
  atristName: string;
  atristDob: Date;
  atristBio: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

 

  constructor(private http: HttpClient) { }

  addArtist(Artist){      
    console.log(Artist);
    return this.http.post('http://localhost:8080/api/addArtist/', Artist)                          
  }  

  GetArtist(){       
    return this.http.get('http://localhost:8080/api/getArtist/')  
                        
  }  
 deleteArtist(id){   
    return this.http.post('http://localhost:8080/api/deleteArtist/',{'id': id})  
                
  } 
  
  //User API

  saveUser(user){      
    return this.http.post('http://localhost:8080/api/SaveUser/', user)  
                       
  }  
  
  GetUser(){       
    return this.http.get('http://localhost:8080/api/getUser/')  
                     
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id})  
                          
  } 

  //Songs API

  AddSongs(songs){
    console.log(songs) ;     
    return this.http.post('http://localhost:8080/api/addSongs/', songs)  
           
  }  
  
  GetSongs(){       
    return this.http.get('http://localhost:8080/api/getSongs/')  
                          
  }  
 deleteSong(id){   
    return this.http.post('http://localhost:8080/api/deleteSongs/',{'id': id})  
                     
  }
   

}