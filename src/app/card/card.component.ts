import { Component } from '@angular/core';
import { ActivatedRoute,RouterState } from '@angular/router';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import ICharacter from '../models/character';
import { CharacterService } from '../services/character.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  data: any;
  item: number = 1;
  result: any;
  defaultImage: string = "https://rickandmortyapi.com/api/character/avatar/19.jpeg";
    
  constructor(private hc:CharacterService,private router: Router,private route: ActivatedRoute){
   

  }

  ngOnInit(): void {

    this.hc.item$.subscribe((itemfromhc: number) => { this.item = itemfromhc});
  
    this.route.queryParams.subscribe(params => {
      this.item = +params['page'] || 1; // Default to page 1 if 'page' query param is not provided
      this.getCharacters();
      
      this.hc.currentPage(this.item)

  });
}

getCharacters() {
  this.hc.getCharacters(this.item).subscribe((data: any) => {
    this.result = data;
  });
}

  add() {
    this.hc.add();
   };
  
   sub(){
    this.hc.sub();
    
   }
  
   SelectCharacter(character:ICharacter):void{
    this.router.navigate(['/characters/'+character.id],);
  }


}
function add() {
  throw new Error('Function not implemented.');
}

function sub() {
  throw new Error('Function not implemented.');
}

