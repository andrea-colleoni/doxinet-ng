import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  show: boolean;

  constructor(
    private hs: HeroService
  ) { }

  ngOnInit() {
    this.heroes = this.hs.getHeroes();
    this.show = true;
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  addHero() {
    this.hs.addHero( {id: 21, name: 'Superman'} );
  }

  toggle() {
    this.show = !this.show;
  }
}
