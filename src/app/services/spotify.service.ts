import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){

    const headers: HttpHeaders = new HttpHeaders({
      'Autorization': 'Bearer BQDMseYV8ykYoMkeR9WSO2Kdm7iphGJeoPZJgbK2XiFoqo__E9u25yuQVDrXpIKfWkHvmaLn6OM2p_17-CM'
    });


    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(
        data => {console.log(data);}
      );
  }
}
