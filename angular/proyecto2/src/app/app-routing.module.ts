import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoPostsComponent } from './components/listado-posts/listado-posts.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // {
  //   path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
  { path: 'listado-posts', component: ListadoPostsComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '', redirectTo: '/listado-posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
