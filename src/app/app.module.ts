import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookIndexComponent } from './components/book/index/book.index.component';
import { CreateComponent } from './components/book/create/create.component';
import { EditComponent } from './components/book/edit/edit.component';
import { appRoutes } from './routerConfig';

import { BookService } from './book.service';
import { RestaurantService } from './services/restaurant.service';
import { StatisticsIndexComponent } from './components/statistics/index/statistics.component';
import { HomeIndexComponent } from './components/home/index/home.index.component';
import { RestaurantIndexComponent } from './components/restaurant/index/restaurant.index.component';
import { RestaurantCreateComponent } from './components/restaurant/create/restaurant.create.component';
import { RestaurantUpdateComponent } from './components/restaurant/update/restaurant.update.component';
import { ChatComponent } from './components/chat/chat.component';
import { SearchComponent } from './components/search/search.component';
import { RecipeResultsComponent } from './components/recipe-results/recipe-results.component';
import { RestaurantResultsComponent } from './components/restaurant-results/restaurant-results.component';
import { SharedDataService } from './services/sharedData.service';

@NgModule({
  declarations: [
    AppComponent,
    BookIndexComponent,
    CreateComponent,
    EditComponent,
    StatisticsIndexComponent,
    HomeIndexComponent,
    RestaurantIndexComponent,
    RestaurantCreateComponent,
    RestaurantUpdateComponent,
    ChatComponent,
    SearchComponent,
    RecipeResultsComponent,
    RestaurantResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService, RestaurantService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
