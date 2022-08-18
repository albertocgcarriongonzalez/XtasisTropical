import { Component, OnInit } from '@angular/core';
import {urlasset} from '../app-routing.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urlasset:string = urlasset;

  constructor() { }

  ngOnInit(): void {
  }



}
