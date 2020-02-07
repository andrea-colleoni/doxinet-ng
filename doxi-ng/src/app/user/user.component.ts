import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { } from 'googlemaps';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  @ViewChild('map', { static: true }) mapElement: any;
  map: google.maps.Map;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let mapProperties;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        mapProperties = {
          center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
      });
    }

    this.route.url.subscribe(url => {
      const id = +url[1];
      this.userService.getUser(id).subscribe(u => {
        this.user = u;
        mapProperties = {
          center: new google.maps.LatLng(+u.address.geo.lat, +u.address.geo.lng),
          zoom: 3,
          mapTypeId: google.maps.MapTypeId.TERRAIN,
        };
        var marker = new google.maps.Marker({
          position: { lat: +u.address.geo.lat, lng: +u.address.geo.lng },
          title: u.name,
          animation: google.maps.Animation.DROP,
        });
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

        marker.setMap(this.map);
      });
    });
  }
}
