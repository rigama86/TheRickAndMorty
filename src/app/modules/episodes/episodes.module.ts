import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEpisodesComponent } from './views/view-episodes/view-episodes.component';
import { ViewEpisodesDescriptionComponent } from './views/view-episodes-description/view-episodes-description.component';



@NgModule({
  declarations: [
    ViewEpisodesComponent,
    ViewEpisodesDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewEpisodesComponent,
    ViewEpisodesDescriptionComponent
  ]
})
export class EpisodesModule { }
