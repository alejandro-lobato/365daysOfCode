import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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
  heroes = HEROES;

  
  
  constructor() { }
  
  ngOnInit(): void {
    // A good place for a component to fetch its initial data.
    // Angular calls ngOnInit() shortly after creating a component. 
    // It's a good place to put initialization logic.
    
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
