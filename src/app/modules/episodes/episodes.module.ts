import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEpisodesComponent } from './views/view-episodes/view-episodes.component';
import { ViewEpisodesDescriptionComponent } from './views/view-episodes-description/view-episodes-description.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ViewEpisodesComponent,
    ViewEpisodesDescriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ViewEpisodesComponent,
    ViewEpisodesDescriptionComponent
  ]
})
export class EpisodesModule { }
