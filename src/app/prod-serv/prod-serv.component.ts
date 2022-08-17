import { ISabores, IOfertas, IEnvases, ITinas } from './cliente.modelo';
import { Component, OnInit } from '@angular/core';
import { sabores, Ofertas, Envases, Tinas } from './data';

@Component({
  selector: 'app-prod-serv',
  templateUrl: './prod-serv.component.html',
  styleUrls: ['./prod-serv.component.scss'],
})
export class ProdServComponent implements OnInit {
  
  Sabores: ISabores[] = [];
  Ofertas: IOfertas[] = [];
  Envases: IEnvases[] = [];
  Tinas: ITinas[] = [];
  
  totalSabores!:number;
  totalOfertas!:number;
  totalEnvases!:number;
  totalTinas!:number;


  constructor() {

  }

  ngOnInit(): void {

    this.Sabores = sabores;
    this.Ofertas = Ofertas;
    this.Envases = Envases;
    this.Tinas = Tinas;

    this.totalSabores=this.get_TotalSabores(sabores);
    this.totalOfertas=this.get_TotalOfertas(Ofertas);
    this.totalEnvases=this.get_TotalEnvases(Envases);
    this.totalTinas=this.get_TotalTinas(Tinas);

  }

  get_TotalSabores(objeto:ISabores[]):number{
    return sabores.length;
  }
  get_TotalOfertas(objeto:IOfertas[]):number{
    return Ofertas.length;
  }
  get_TotalEnvases(objeto:IEnvases[]):number{
    return Envases.length;
  }
  get_TotalTinas(objeto:ITinas[]):number{
    return Tinas.length;
  }



}
