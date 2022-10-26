import { HederComponent } from './heder/heder.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
const routes: Routes = [
 
  {path:'exp' , component:ExperienceComponent},
  {path:'edu' , component:EducationComponent},
  {path:'add' , component:AddComponent },
  {path:'' , component:EducationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
