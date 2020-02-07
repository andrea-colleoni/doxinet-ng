import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute, Router, } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private rouetr: Router,
  ) { }

  ngOnInit() {
    this.route.url.subscribe(u => {
      const id = +u[1];
      this.hero = this.heroService.getHeroes().find(h => h.id === id);
    });
  }

  goBack() {
    this.location.back();
  }

  prossimo() {
    const nextId = this.heroService.getHeroes()
      .filter(h => h.id > this.hero.id)
      .map(h => h.id)
      .sort()[0];
    this.rouetr.navigate([ `/detail/${nextId}` ]);
  }

}
