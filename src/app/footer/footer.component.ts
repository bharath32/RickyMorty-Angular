import { Component, EventEmitter, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../services/character.service';
// import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  item: number = 1;
  change: boolean = false;
  
  constructor(private hc:CharacterService,private router: Router,private route: ActivatedRoute){
   
    
  }

  ngOnInit(): void {
  this.hc.item$.subscribe((itemfromhc: number) => { this.item = itemfromhc});
  
  

  }

  add() {
    this.hc.add();
    this.navigateToPage(this.item);
  
   };
  
   sub(){
    this.hc.sub();
    this.navigateToPage(this.item);
   }

   navigateToPage(pageNumber: number) {
    this.router.navigate([], {
      queryParams: { page: pageNumber }
    });
  }



}
