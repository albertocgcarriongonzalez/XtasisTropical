import { Component, OnInit } from '@angular/core';
import {urlasset} from '../app-routing.module';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  urlasset:string = urlasset;

  constructor() { }

  ngOnInit(): void {
  }

}
