import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { FormNovoComponent }      from './cadastro/form.novo.component';
import { TabelasComponent }      from './tabelas/tabelas.component';
import { DetalheComponent }      from './detalhe/detalhe.component';

//import { HeroDetailComponent }  from './hero-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'cadastroNovo',     component: FormNovoComponent },
  { path: 'tabelas',     component: TabelasComponent },
  { path: 'detalhe/:id',     component: DetalheComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}