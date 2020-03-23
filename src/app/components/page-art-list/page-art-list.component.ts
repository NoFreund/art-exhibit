import { Component, OnInit } from '@angular/core';
import { ArtsArray } from "../../services/fakeData";
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-page-art-list',
  templateUrl: './page-art-list.component.html',
  styleUrls: ['./page-art-list.component.css']
})
export class PageArtListComponent implements OnInit {
  myArray = [];
  constructor(private as:ArtService) { }

  unavailableArt = [];
  naU;
  naB;
  naA;
  
  ngOnInit(): void {
    this.myArray = this.as.getAllArts();  

    this.unavailableArt = this.as.getUnavailableArts();
    this.naU = this.as.naUnavailable();
    this.naB = this.as.naAllArts();
    this.naA = this.as.naAvailable();

  }

  changeAvailability(art) {
    art.available = !art.available;
  }
}
