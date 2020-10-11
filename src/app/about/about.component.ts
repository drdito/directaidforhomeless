import { Component, OnInit } from '@angular/core';
import * as data from '../config/content-configuration.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  items:  any  = (data  as  any).default;
  constructor() { 
    console.log(this.items.team_member_cards);
  }

  ngOnInit(): void {
  }

  getCardItems(){
    return this.items.team_member_cards;
  }

}
