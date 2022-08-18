import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title='Xtasis Tropical';
  urlasset:string="https://albertocgcarriongonzalez.github.io/xtasistropical/assets/";

}
