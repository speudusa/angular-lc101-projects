import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Images of Things';
  image1 = 'https://images.dailykos.com/images/295092/large/Taco-Cat-Spelled-Backwards-Is-Taco-Cat.-e1430184838220_1_.jpg?1472864097';
  image2 = 'https://i.pinimg.com/originals/40/f9/42/40f9429eb97e9b397ae1b25096746e75.jpg';
  image3 = 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2017/11/17/iStock_Christmas-Cactus_511790642_large.jpg.rend.hgtvcom.1280.853.suffix/1510949507006.jpeg';

  constructor() { }

  ngOnInit() {
  }

}