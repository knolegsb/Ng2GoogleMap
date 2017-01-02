import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zoom: number = 10;

  lat: number = 33.874958;
  lng: number = -117.966384;

  markers: marker[] = [
    {
      name: 'Company One',
      lat: 33.874958,
      lng: -117.966384,
      draggable: true
    },
    {
      name: 'Company Two',
      lat: 33.951640,
      lng: -118.070313,
      draggable: true
    },
    {
      name: 'Company Three',
      lat: 34.040914,
      lng: -118.271781,
      draggable: false
    }
  ];

  constructor(){

  }
  clickedMarker(marker: marker, index: number){
    console.log('Clicked Marker: ' + marker.name + ' at index ' + index);
  }
}

interface marker{
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}

