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
  filteredHeroes: Hero[];
  show: boolean;
  search = '';

  constructor(
    public hs: HeroService
  ) { }

  ngOnInit() {
    // this.heroes = this.hs.getHeroesOld();

    this.hs.heroes.subscribe(h => {
        this.heroes = h;
        this.filter();
    });

    this.hs.vecchioArrayDiEroi();
    this.show = true;
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  addHero() {
    // this.hs.addHero( {id: 21, name: 'Superman'} );
  }

  filter() {
    console.log(this.search);
    this.filteredHeroes =
      this.heroes
        .filter(h => this.search === '' || h.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0);
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
