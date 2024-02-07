import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlertaCompraComponent } from './alerta-compra/alerta-compra.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, AlertaCompraComponent]
})
export class AppComponent {
  title = 'SweetAlert-Tarea1';

  alert=new AlertaCompraComponent();

  abrirModal(){
    this.alert.simpleAlert();
  }

  abrirModalDragon(){
    this.alert.alertDragon();
  }

  abrirModalSeiya(){
    this.alert.alertSeiya();
  }

  abrirModalOne() {
    this.alert.alertOne();
  }

  abrirModalBleach(){
    this.alert.alertBleach();
  }
}
