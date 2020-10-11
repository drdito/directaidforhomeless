import { Component, OnInit, Input } from '@angular/core';

export class TeamMemberItem {
  memberName: string;
  imageSrc: string;
  position: string;
  description: string;
  imageDescription: string;
}

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  
  @Input('card-data') cardData: TeamMemberItem;

  constructor() { }

  ngOnInit(): void {
  }

  getImageSrc(){
    return this.cardData.imageSrc;
  }

  getImgDescription(){
    return this.cardData.imageDescription;
  }

  getMemberName(){
    return this.cardData.memberName;
  }

  getMemberPosition(){
    return this.cardData.position;
  }

  getMemberDesc(){
    return this.cardData.description;
  }

}
