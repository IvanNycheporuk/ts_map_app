import { User } from './User';
import { Company } from './Company';

export interface Mappable {
    location: {
        lat: number,
        lng: number
    },
    markableContent(): string,
    color: string
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(data: Mappable): void {
        let marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: data.location.lat,
                lng: data.location.lng
            }
        })

        marker.addListener("click", () => {
            const infowindow = new google.maps.InfoWindow({
                content: data.markableContent(),
              });

            infowindow.open(this.googleMap, marker);
          })
    }
}
