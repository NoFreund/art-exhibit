import { Injectable } from '@angular/core';
import { ArtsArray } from "./fakeData";
import { PageArtListComponent } from '../components/page-art-list/page-art-list.component';
import { Art } from "../model/art";

@Injectable({
  providedIn: 'root'
})

export class ArtService {
//i almost fake the API this way
myArts = ArtsArray;

  constructor() { }
  
  getAllArts(): Art[]{
    return this.myArts;
  }
 
  getOneArtbyName(givenName: string): Art {
    return this.myArts.filter(art => art.name === givenName)[0];
  }

  addNewArt(art: Art) {
    this.myArts.push(art);
  }

  getUnavailableArts(): Art[] {
    return this.myArts.filter(art => !art.available);
  }

  //length of the previous array
  naUnavailable(): number {
    return this.getUnavailableArts().length;
  }

  //length of the previous array
  naAllArts(): number {
    return this.myArts.length;
  }

  naAvailable(): number {
    return this.myArts.filter(art => art.available).length;
  }
}