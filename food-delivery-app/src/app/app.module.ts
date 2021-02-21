import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardMenuComponent } from './components/menu/card-menu/card-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { GlobalSearchPipe } from './pipes/global-search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { SortpipePipe } from './pipes/sortpipe.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { GlobalNavigationComponent } from './components/global-navigation/global-navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardMenuComponent,
    CartComponent,
    OrderComponent,
    GlobalSearchPipe,
    FilterPipePipe,
    PaginationPipe,
    SortpipePipe,
    GlobalNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
