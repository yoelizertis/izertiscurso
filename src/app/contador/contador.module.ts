import { NgModule } from '@angular/core';
import { ContadorComponent } from './contadorcomponent/contador.component';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  imports: [
  ],
  
  exports: [
    ContadorComponent
],
  providers: [],
  bootstrap: [ContadorComponent]
})
export class ContadorModule { }