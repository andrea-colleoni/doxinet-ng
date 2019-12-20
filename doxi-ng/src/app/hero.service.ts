import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[];

  constructor() {
    this.heroes = HEROES;
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }

}
