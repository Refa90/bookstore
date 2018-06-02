import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookIndexComponent } from './components/book/index/book.index.component';
import { CreateComponent } from './components/book/create/create.component';
import { EditComponent } from './components/book/edit/edit.component';
import { appRoutes } from './routerConfig';

import { BookService } from './book.service';
import { ProductComponent } from './components/product/product.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { StatisticsIndexComponent } from './components/statistics/index/statistics.component';
import { HomeIndexComponent } from './components/home/index/home.index.component';

@NgModule({
  declarations: [
    AppComponent,
    BookIndexComponent,
    CreateComponent,
    EditComponent,
    ProductComponent,
    ShoppingComponent,
    StatisticsIndexComponent,
    HomeIndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
