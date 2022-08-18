import { Component, OnInit } from '@angular/core';
import {urlasset} from '../app-routing.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  numeroW:string = "+53 5 5168284";
  urlasset:string = urlasset;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

}
