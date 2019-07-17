import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './components/articles/articles.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/articles', pathMatch: 'full' },    
      { path: 'articles', component: ArticlesComponent },
    ]
  },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'logout', xx },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
