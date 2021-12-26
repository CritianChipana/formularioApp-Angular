import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild("miformulario") miformulario!: NgForm;
  constructor() { }

  initForm = {
    producto: "213324",
    precio: 10,
    existencias:10
  }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miformulario?.controls.producto?.invalid && this.miformulario?.controls.producto?.touched 
  }

  precioValido() : boolean {
    return this.miformulario?.controls.precio?.touched && this.miformulario?.controls.precio?.value < 0 

    // return this.miformulario?.controls.precio?.invalid && this.miformulario?.controls.precio?.touched
  }

  // guardar(miformulario : NgForm){
  guardar( ){
    console.log(this.miformulario)
    this.miformulario.resetForm({
      precio:0,
      existencias:0
    });
  }

}
