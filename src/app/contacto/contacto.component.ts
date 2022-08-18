import { Component, OnInit } from '@angular/core';
import {urlasset} from '../app-routing.module';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  urlasset:string = urlasset;

  constructor() { }

  ngOnInit(): void {
   

  }

}
