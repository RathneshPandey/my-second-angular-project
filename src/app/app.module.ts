import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './components/nav/nav.component';
import { SideAssetsComponent } from './components/side-assets/side-assets.component';
import { FutureComponent } from './components/future/future.component';
import { FastFreeComponent } from './components/fast-free/fast-free.component';
import { CoffeeTableComponent } from './components/coffee-table/coffee-table.component';
import { TableCoffeeComponent } from './components/table-coffee/table-coffee.component';
import { ShopProductComponent } from './components/shop-product/shop-product.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { WordsComponent } from './components/words/words.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DemoComponent } from './pages/demo/demo.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
   
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideAssetsComponent,
    FutureComponent,
    FastFreeComponent,
    CoffeeTableComponent,
    TableCoffeeComponent,
    ShopProductComponent,
    DiscoverComponent,
    WordsComponent,
    NewsletterComponent,
    FooterComponent,
    LoginPageComponent,
    DemoComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
