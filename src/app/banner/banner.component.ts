import { Component, OnInit } from '@angular/core';
import {urlasset} from '../app-routing.module';

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
  urlasset:string=urlasset;

}
