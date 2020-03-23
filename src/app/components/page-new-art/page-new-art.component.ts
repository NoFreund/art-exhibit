import { Component, OnInit } from '@angular/core';
import { Art } from 'src/app/model/art';
import { ArtService } from 'src/app/services/art.service';
import { ArtsArray } from 'src/app/services/fakeData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-new-art',
  templateUrl: './page-new-art.component.html',
  styleUrls: ['./page-new-art.component.css']
})
export class PageNewArtComponent implements OnInit {
  currentArt = <Art>{};

  constructor(private as: ArtService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addArtClicked(){
    console.log(this.currentArt);
    this.as.addNewArt(this.currentArt);
    this.router.navigate(['/art-details', this, this.currentArt.name])
  }
}
