import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { carddetailsComponent } from './carddetails/carddetails.component';

import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CardComponent },
  { path: 'characters/:id', component: carddetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
