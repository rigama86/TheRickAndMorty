import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCharacterDescriptionComponent } from './modules/characters/views/view-character-description/view-character-description.component';
import { ViewCharactersComponent } from './modules/characters/views/view-characters/view-characters.component';
import { ViewEpisodesComponent } from './modules/episodes/views/view-episodes/view-episodes.component';
import { ViewEpisodesDescriptionComponent } from './modules/episodes/views/view-episodes-description/view-episodes-description.component';
import { ViewLocationsComponent } from './modules/locations/views/view-locations/view-locations.component';
import { ViewLocationDescriptionComponent } from './modules/locations/views/view-location-description/view-location-description.component';
import { CharactersModule } from './modules/characters/characters.module';
import { EpisodesModule } from './modules/episodes/episodes.module';

const routes: Routes = [
  { path: '', component: ViewCharactersComponent },
  { path: 'character/:id', component: ViewCharacterDescriptionComponent },
  {
    path: '',
    loadChildren: () => import('./modules/characters/characters.module').then( m => m.CharactersModule )
  },
  { path: 'episodes' ,component: ViewEpisodesComponent },
  { path: 'episode/:id' ,component: ViewEpisodesDescriptionComponent },
  {
    path: '',
    loadChildren: () => import('./modules/episodes/episodes.module').then( m => m.EpisodesModule )
  },
  { path: 'locations' ,component: ViewLocationsComponent },
  { path: 'location/:id' ,component: ViewLocationDescriptionComponent },
  {
    path: '',
    loadChildren: () => import('./modules/locations/locations.module').then( m => m.LocationsModule )
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
