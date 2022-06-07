import { RouterModule, Routes } from '@angular/router';
import { TelaApresentacaoComponent } from './tela-apresentacao/tela-apresentacao.component';
import { LogarComponent } from './logar/logar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TelaApresentacaoComponent },
  { path: 'login', component: LogarComponent },
  { path: 'cadastrar', component: CadastrarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }



