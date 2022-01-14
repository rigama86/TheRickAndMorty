import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../models/character.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() characters: Character[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
