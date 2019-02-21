import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  // paises: any[]=[];
  /*paises2: any[]=[];*/
  contenedores = [
    {
      name: 'Componente 1',
      paises: []
    },
    {
      name: 'Componente 2',
      paises: []
    }
  ];

  // allDropLists = [ 'paisesList', ...this.contenedores.map(_ => _.name)];
  allDropLists = [ ...this.contenedores.map(_ => _.name)];

  constructor(private _paisesService: PaisesService) { }

  ngOnInit() {
    this._paisesService.getPaises().subscribe( (resultado: any[]) => {
          // this.paises = resultado;
          this.contenedores[0].paises = resultado;
    });
  }

  /* // usar este si meto un dragndrop externo!
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(this.allDropLists);
  } */

}
