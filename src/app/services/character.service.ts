// character.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';import ICharacter from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private itemSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public item$: Observable<number> = this.itemSubject.asObservable();

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(page?: number): Observable<ICharacter[]> {
    const url = `${this.apiUrl}/?page=${page}`;
    return this.http.get<any>(url).pipe(
      map(response =>{
        
        return response.results as ICharacter[]})
    );
  }

  getCharacterById(id: number): Observable<ICharacter> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ICharacter>(url);
  }


add(){
  const currentValue = this.itemSubject.getValue();
  this.itemSubject.next(currentValue + 1);
  this.getCharacters();
}
sub(){
 
if (this.itemSubject.getValue() > 1){
  const currentValue = this.itemSubject.getValue();
  this.itemSubject.next(currentValue - 1);
}
}
currentPage(item: number){
  this.itemSubject.next(item);
}


}

