import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/sharedData.service';

@Component({
  selector: 'app-restaurant-map-results',
  templateUrl: './restaurant-map-results.component.html',
  styles: [`
  agm-map {
    height: 300px;
  }
  
  
  * {
    font-family: Lato;
  }
  
  a {
    color: darkblue;
  }
  `]
})
export class RestaurantMapResultsComponent implements OnInit {
// google maps zoom level
zoom: number = 8;
  
// initial center position for the map
lat: number = 51.673858;
lng: number = 7.815982;
markers: marker[] = [];

restaurants:any[] = [];

constructor(private sharedData: SharedDataService) { }

ngOnInit() {
  this.sharedData.currentRestaurantResults.subscribe((res : any) =>  {
    var  first = true;
    this.markers = []
    res.forEach(element => {
      
      if(element.lat && element.lon) {
        if (first) {
          this.lat = element.lat
          this.lng = element.lon
          first = false
        }
        this.markers.push({lat : element.lat, lng : element.lon, label: element.name, draggable: false});
      }
    });
    this.restaurants = res
  });
}

}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}