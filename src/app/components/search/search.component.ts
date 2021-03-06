import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  search(term : string){
    //console.log(term);
    this.spotify.searchArtist(term)
      .subscribe(
        (data: any) => {console.log(data);
          this.artists = data.artists.items;
        }
        
      );
  }

}
