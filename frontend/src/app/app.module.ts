import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[


  //http://localhost:4200/category/id
  {path:'category/:id',component:OrderItemsComponent},
    //http://localhost:4200/category
  {path:'category',component:OrderItemsComponent},
    //http://localhost:4200/orders
  {path:'orders',component:CategoryItemsComponent},
    //http://localhost:4200/
  {path:'',redirectTo:'/orders',pathMatch:'full'},
   // if user enter anything without all routes.
  {path:'**',redirectTo:'/orders',pathMatch:'full'},


];
@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
