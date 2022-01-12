import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLocationsComponent } from './views/view-locations/view-locations.component';
import { ViewLocationDescriptionComponent } from './views/view-location-description/view-location-description.component';



@NgModule({
  declarations: [
    ViewLocationsComponent,
    ViewLocationDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewLocationsComponent,
    ViewLocationDescriptionComponent
  ]
})
export class LocationsModule { }
