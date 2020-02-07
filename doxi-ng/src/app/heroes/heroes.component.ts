import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  filteredHeroes: Hero[];
  show: boolean;
  search = '';

  constructor(
    public hs: HeroService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.hs.observableHeroes.subscribe(h => {
      this.heroes = h;
      this.filter();
    });
    this.show = true;
  }

  selectHero(hero: Hero) {
    this.router.navigate([`detail/${hero.id}`]);
  }

  addHero() {
    this.hs.addHero({ id: 21, name: 'Superman' });
  }

  filter() {
    if (this.heroes) {
      this.filteredHeroes =
        this.heroes
          .filter(h => this.search === '' || h.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0);
    }
  }

  toggle() {
    this.show = !this.show;
  }

  cambia1() {
    this.hs.newArray();
  }

  cambia2() {
    this.hs.mockArray();
  }
}
