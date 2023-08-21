import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/page/form/form.component';
import { FinishComponent } from './components/page/finish/finish.component';

const routes: Routes = [
  {path: '', component:FormComponent},
  {path: 'finish', component:FinishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
