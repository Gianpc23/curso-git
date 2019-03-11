import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { OtroComponenteComponent } from './otro-componente.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    OtroComponenteComponent,
    CmpDatabindingComponent,
    Hijo1Component,
    Hijo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
