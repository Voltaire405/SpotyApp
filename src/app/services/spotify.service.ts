import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQBeSz8BMIJU_DN51YFRO8dusK97KWgbKWdmCvWJrFtPkPVYBEczDHnIHBug5cf8c8pTHkCTf4C-jxXitiM'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});          
  }
  searchArtist( term: string ){

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQBeSz8BMIJU_DN51YFRO8dusK97KWgbKWdmCvWJrFtPkPVYBEczDHnIHBug5cf8c8pTHkCTf4C-jxXitiM'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, {headers});          
  }
}
