import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'W Doxinet!';
  doveSei = 'Non lo so';

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event.url) {
        this.doveSei = event.url;
      }
    });
  }

}
