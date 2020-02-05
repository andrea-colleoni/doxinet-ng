import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesSubject = new Subject<Hero[]>();

  constructor() {
  }
  /*
  getHeroesOld(): Hero[] {
    return this.heroes;
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }
  */

  get heroes(): Observable<Hero[]> {
    return this.heroesSubject.asObservable();
  }

  nuovoArrayDiEroi() {
    this.heroesSubject.next([{ id: 1000, name: 'Nuovo Eroe' }]);
  }

  vecchioArrayDiEroi() {
    this.heroesSubject.next(HEROES);
  }

}
