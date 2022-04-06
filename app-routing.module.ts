import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductComponent } from './admin/product/product.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"admin/login",component:LoginComponent},
  {path:"admin/dashboard",component:DashboardComponent},
  {path:"admin/product",component:ProductComponent},
  {path:"admin/order",component:OrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const RoutingComponents = [HomeComponent,AboutComponent,ContactComponent,LoginComponent]
