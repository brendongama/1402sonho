import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopeeComponent } from './shopee/shopee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent , children: [
    {path: "shopee", component: ShopeeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 