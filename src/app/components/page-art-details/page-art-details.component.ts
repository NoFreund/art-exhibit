import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtService } from 'src/app/services/art.service';
import { ArtsArray } from "../../services/fakeData";
import { Art } from "../../model/art"

@Component({
  selector: 'app-page-art-details',
  templateUrl: './page-art-details.component.html',
  styleUrls: ['./page-art-details.component.css']
})

export class PageArtDetailsComponent implements OnInit {
  mySpecificProduct: Art;
  myArray = [];

  constructor(private route: ActivatedRoute, private as: ArtService) { }

  ngOnInit(): void {
    this.mySpecificProduct = ArtsArray[0];
    this.route.paramMap.subscribe(params => {
      const capturedName = params.get('name');
      console.log(this.as.getOneArtbyName(capturedName))
      this.mySpecificProduct = this.as.getOneArtbyName(capturedName) || ArtsArray[0];
    

    })
  }

  changeAvailability(art) {
    art.available = !art.available;
  }
}
