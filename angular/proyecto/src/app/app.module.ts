import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { OtroComponenteComponent } from './otro-componente.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { MarcarDirective } from './cmp-directivas/marcar.directive';
import { OcultarPipe } from './cmp-pipes/ocultar.pipe';
import { PowerDirective } from './cmp-directivas/power.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { DatosService } from './cmp-servicios/datos.service';
import { TodoComponent } from './todo/todo.component';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { FormPlantillaComponent } from './cmp-formularios/form-plantilla/form-plantilla.component';
import { FormReactivoComponent } from './cmp-formularios/form-reactivo/form-reactivo.component';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { InicioComponent } from './cmp-routing/inicio/inicio.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { ROUTING } from './cmp-routing/app.routes';
import { UsuarioComponent } from './cmp-routing/usuario/usuario.component';
import { EditarComponent } from './cmp-routing/inicio/editar/editar.component';
import { InfoComponent } from './cmp-routing/inicio/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    OtroComponenteComponent,
    CmpDatabindingComponent,
    Hijo1Component,
    Hijo2Component,
    CmpPipesComponent,
    DoblePipe,
    ReversePipe,
    FiltroPipe,
    CmpDirectivasComponent,
    MarcarDirective,
    OcultarPipe,
    PowerDirective,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    TodoComponent,
    CmpFormulariosComponent,
    FormPlantillaComponent,
    FormReactivoComponent,
    CmpRoutingComponent,
    InicioComponent,
    NuevoUsuarioComponent,
    UsuarioComponent,
    EditarComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
