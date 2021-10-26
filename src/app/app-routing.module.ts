import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { UserFormComponent } from './Users/user/user-form/user-form.component';

export const routes : Routes =[
                                {path: '', component: HomePageComponent},
                                {path: 'signInForm', component: UserFormComponent},
                                {path: 'home', component: HomePageComponent}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
