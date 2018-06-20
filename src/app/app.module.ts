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
import { StatsService } from './services/stats.service';
import { HomeIndexComponent } from './components/home/index/home.index.component';
import { RestaurantIndexComponent } from './components/restaurant/index/restaurant.index.component';
import { RestaurantCreateComponent } from './components/restaurant/create/restaurant.create.component';
import { RestaurantUpdateComponent } from './components/restaurant/update/restaurant.update.component';
import { ChatComponent } from './components/chat/chat.component';
import { SearchComponent } from './components/search/search.component';
import { RecipeResultsComponent } from './components/recipe-results/recipe-results.component';
import { RestaurantResultsComponent } from './components/restaurant-results/restaurant-results.component';
import { SharedDataService } from './services/sharedData.service';
import { LabelComponent } from './components/statistics/label/label.component';
import { RatingComponent } from './components/statistics/rating/rating.component';
import { BarChartComponent } from 'angular-d3-charts'; // this is needed!
import { PieChartComponent } from 'angular-d3-charts'; // this is needed!
import { RecipeService } from './services/recipe.service';
import { ChatService } from './services/chatService.service';
import { StatsPageComponent } from './components/statistics/stats-page/stats-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookIndexComponent,
    CreateComponent,
    EditComponent,
    HomeIndexComponent,
    RestaurantIndexComponent,
    RestaurantCreateComponent,
    RestaurantUpdateComponent,
    ChatComponent,
    SearchComponent,
    RecipeResultsComponent,
    RestaurantResultsComponent,
    LabelComponent,
    PieChartComponent,
    RatingComponent,
    BarChartComponent,
    StatsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService, RestaurantService, SharedDataService, RecipeService, StatsService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
