import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../models/character.model';
import { Episodes } from '../../../models/episodes.model';
import { Location } from 'src/app/models/location.model';
@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() characters: Character[] = [];
  @Input() episodes: Episodes[] = [];
  @Input() locations: Location[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
