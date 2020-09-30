import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PromoComponent } from './promo/promo.component';
import { Promo2Component } from './promo2/promo2.component';
import { TendenciasComponent } from './tendencias/tendencias.component';
import { ShopCategoriesComponent } from './shop-categories/shop-categories.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    PromoComponent,
    Promo2Component,
    TendenciasComponent,
    ShopCategoriesComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PromoComponent,
    Promo2Component,
    TendenciasComponent,
    ShopCategoriesComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
