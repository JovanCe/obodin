import { Injectable } from '@angular/core';
import { Observable, of} from "rxjs";
import { Hero } from '../model/hero';
import { HEROES} from "../model/mock-heroes";
import { MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    let heroes = of(HEROES);
    this.messageService.add('HeroService: Heroes fetched');
    return heroes;
  }
}
