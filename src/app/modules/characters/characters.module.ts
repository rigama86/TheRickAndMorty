import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCharactersComponent } from './views/view-characters/view-characters.component';
import { ViewCharacterDescriptionComponent } from './views/view-character-description/view-character-description.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ViewCharactersComponent,
    ViewCharacterDescriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ViewCharactersComponent,
    ViewCharacterDescriptionComponent
  ]
})
export class CharactersModule { }
