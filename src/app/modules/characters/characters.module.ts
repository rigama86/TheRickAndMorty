import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './components/character/character.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { ViewCharactersComponent } from './views/view-characters/view-characters.component';
import { ViewCharacterDescriptionComponent } from './views/view-character-description/view-character-description.component';



@NgModule({
  declarations: [
    ViewCharactersComponent,
    ViewCharacterDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewCharactersComponent,
    ViewCharacterDescriptionComponent
  ]
})
export class CharactersModule { }
