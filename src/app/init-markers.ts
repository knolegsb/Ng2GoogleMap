export class Init{
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
            console.log('No markers found... creating...');

            var markers = [
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

            localStorage.setItem('markers', JSON.stringify(markers));
        } else {
            console.log('Loading markers...');
        }
    }
}