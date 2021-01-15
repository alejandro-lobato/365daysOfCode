import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// Angular metadata for the component
@Component({

  // Matches the name of the HTML element that identifies
  // this component within a parent component's template.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero!: Hero;
  heroes!: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }
  
  ngOnInit(): void {
    // A good place for a component to fetch its initial data.
    // Angular calls ngOnInit() shortly after creating a component. 
    // It's a good place to put initialization logic.
    this.getHeroes();
    
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${ hero.id }`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }

}
