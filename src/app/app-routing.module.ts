import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth/auth.guard';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [  { path: 'login', component: LoginComponent,  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
