import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// Angular metadata for the component
@Component({

  // Matches the name of the HTML element that identifies
  // this component within a parent component's template.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }
  
  // A good place for a component to fetch its initial data.
  // Angular calls ngOnInit() shortly after creating a component. 
  // It's a good place to put initialization logic.
  ngOnInit(): void {
    
  }

}