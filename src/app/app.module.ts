import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { AppCarrouselSkeleton } from './carrousel-skeleton/carrousel-skeleton.component';
import { TagModule } from 'primeng/tag';
import { ProductService } from './carrousel-skeleton/productService/productService';
import { PainelComponent } from './painel/painel.component';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from './menubar/menubar.component';



@NgModule({
  declarations: [
    AppComponent,
    AppCarrouselSkeleton,
    PainelComponent,
    MenubarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConfirmPopupModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    CardModule,
    MenubarModule
  ],
  providers: [AppCarrouselSkeleton,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
