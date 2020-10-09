import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

function el(id){
  return document.getElementById(id);
}

function stripSlash(str){
  if(str.length === 0){
    return 'Home';
  }
  let newText = str.replace(/\//g, '');
  let upper = newText.charAt(0).toUpperCase() + newText.slice(1)
  return upper;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeButton: string = '';
  totalButtons: number = 1;
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.totalButtons = el('root-count').childNodes.length - 1;
    this.activeButton = stripSlash(this.location.path());
  }

  ngAfterViewInit(){
    
  }

  handleActiveButton(event){
    let clickedItem = event.target.innerText;
    if(clickedItem === this.activeButton){
      return;
    }
    this.activeButton = clickedItem;
  }

  getButtonWidth(){
    return `${100 / this.totalButtons}%`
  }

}
