import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
