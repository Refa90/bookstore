import { SharedDataService } from '../../services/sharedData.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styles: []
})
export class RecipeResultsComponent implements OnInit {
  recipies:any[] = [];

  constructor(private sharedData: SharedDataService) { }

  ngOnInit() {
    this.sharedData.currentRecipyResults.subscribe(res => this.recipies = res);
  }

}
