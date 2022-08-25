import { Component, OnInit } from '@angular/core';
import {urlasset} from '../app-routing.module'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  urlasset:string = urlasset;

  constructor() { }

  ngOnInit(): void {
  }
  

}
