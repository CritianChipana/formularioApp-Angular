import { Component } from '@angular/core';

interface MenuItem{
  texto: string,
  ruta: string
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent   {

  templateMenu: MenuItem[] = [
    {
      texto: "Basicos",
      ruta:"./template/basicos"
    },
    {
      texto: "Dinamico",
      ruta:"./template/dinamicos"
    },
    {
      texto: "Switches",
      ruta:"./template/switches"
    }
  ]

  
  reactiveMenu: MenuItem[] = [
    {
      texto: "Basicos",
      ruta:"./reactive/basicos"
    },
    {
      texto: "Dinamico",
      ruta:"./reactive/dinamicos"
    },
    {
      texto: "Switches",
      ruta:"./reactive/switches"
    }
  ]

}
