import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http'
import { ListadoPostsComponent } from './components/listado-posts/listado-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ListadoPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
