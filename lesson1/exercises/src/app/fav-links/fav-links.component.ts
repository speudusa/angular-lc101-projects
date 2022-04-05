import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://stardewvalleywiki.com/Stardew_Valley_Wiki','https://www.mylibrary.org/', 'https://www.pandora.com']
  constructor() { }

  ngOnInit() {
  }

}
