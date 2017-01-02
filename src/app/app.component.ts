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

  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;

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

  constructor() {

  }
  clickedMarker(marker: marker, index: number) {
    console.log('Clicked Marker: ' + marker.name + ' at index ' + index);
  }

  mapClicked($event: any) {
    console.log('Map Clicked');
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }

    this.markers.push(newMarker);
  }

  markerDragEnd(marker: any, $event: any){
    console.log('dragEnd', marker, $event);

    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }

  addMarker(){
    console.log('Adding Marker');
    if(this.markerDraggable == 'yes'){
      var isDraggable = true;
    }
    else{
      var isDraggable = false;
    }

    var newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    this.markers.push(newMarker);
  }
}

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}

