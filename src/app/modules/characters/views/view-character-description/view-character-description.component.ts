import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../../../services/character.service';
import { Character } from '../../../../models/character.model';

@Component({
  selector: 'app-view-character-description',
  templateUrl: './view-character-description.component.html',
  styleUrls: ['./view-character-description.component.scss']
})
export class ViewCharacterDescriptionComponent implements OnInit {
  characters: Character[] = [];

  constructor(private router: ActivatedRoute, private serviceChacaracter: CharacterService) { }

  ngOnInit(): void {
    this.router.params.subscribe( ( {id}) => {
      this.searchCharacter(id);
    } )
  }

  searchCharacter(param: string) {
    console.log(param);
    this.serviceChacaracter.searchCharacter(param).subscribe( response => {
      this.characters = response;

      console.log(this.characters);
    } )
  }

}
