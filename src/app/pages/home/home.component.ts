import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paises: any[]=[];

  constructor(private _paisesService: PaisesService) { }

  ngOnInit() {
    this._paisesService.getPaises().subscribe( (resultado: any[]) => {
          this.paises = resultado;
    });
  }

  drop(e: CdkDragDrop<any>) {
    // mueve elemento automaticamente de indice 
    moveItemInArray(this.paises, e.previousIndex, e.currentIndex);
  }

}
