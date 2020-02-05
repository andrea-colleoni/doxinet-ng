import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Observable<Hero[]>;
  show: boolean;

  constructor(
    public hs: HeroService
  ) { }

  ngOnInit() {
    // this.heroes = this.hs.getHeroesOld();
    /*
    this.hs.getHeroes().subscribe(h => {
        this.heroes = h;
    });
    */
    this.heroes = this.hs.heroes;
    this.show = true;
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  addHero() {
    // this.hs.addHero( {id: 21, name: 'Superman'} );
  }

  toggle() {
    this.show = !this.show;
  }

  cambia1() {
    this.hs.nuovoArrayDiEroi();
  }

  cambia2() {
    this.hs.vecchioArrayDiEroi();
  }
}
