import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginguardGuard } from './core/guards/login/loginguard.guard';
import { PostAuthComponent } from './post-auth/post-auth.component';

const routes: Routes = [
  {
    path: '',
    canActivate:[LoginguardGuard],
    loadChildren : () => import('./pre-auth/pre-auth.module').then(m => m.PreAuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren : () => import('./post-auth/post-auth.module').then(m => m.PostAuthModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
