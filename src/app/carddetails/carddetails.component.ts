import { Component, OnInit } from "@angular/core";
import { CharacterService } from "../services/character.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import ICharacter from "../models/character";
import { Location } from '@angular/common';

@Component({
  selector: "app-character-details",
  templateUrl: "./carddetails.component.html",
  styleUrl: "./carddetails.component.css",
})
export class carddetailsComponent implements OnInit {
  item!:number;
  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  id = 0;
  character: ICharacter = {
    id: this.id,
    name: "",
    image: "",
    status: "",
    lastSeen: "",
    species: "",
    location: "",
    gender: "",
    type: "",
    origin: "",
    episode: [],
    url: "",
    created: "",
  };
  ngOnInit(): void {
    this.characterService.item$.subscribe((itemfromhc: number) => { this.item = itemfromhc});

    const params: Params = this.route.snapshot.params;
    this.id = params["id"];

    this.loadCharacter();
  }
  loadCharacter(): void {
    this.characterService
      .getCharacterById(this.id)
      .subscribe((characters) => (this.character = characters));
  }
  showCharacterData() {
    return JSON.stringify(this.character);
  }
  back(){
    this.router.navigate(['/characters'], { queryParams: { page: this.item } });
  }
}
