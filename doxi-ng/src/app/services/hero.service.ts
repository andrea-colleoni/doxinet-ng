import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesSubject = new BehaviorSubject<Hero[]>(undefined);
  private heroes: Hero[];

  constructor() {
    this.mockArray();
  }

  getHeroes(): Hero[] {
    return this.heroesSubject.value;
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
    this.notifyObservers();
  }

  get observableHeroes(): Observable<Hero[]> {
    return this.heroesSubject.asObservable();
  }

  newArray() {
    this.heroes = [{ id: 1000, name: 'Nuovo Eroe' }];
  }
  mockArray() {
    this.heroes = HEROES;
    this.notifyObservers();
  }

  private notifyObservers() {
    this.heroesSubject.next(this.heroes);
  }
}
