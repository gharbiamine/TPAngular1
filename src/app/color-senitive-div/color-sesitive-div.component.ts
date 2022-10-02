import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-sesitive-div',
  templateUrl: './color-sesitive-div.component.html',
  styleUrls: ['./color-sesitive-div.component.css'],
})
export class ColorSensitiveDiv implements OnInit {
  color = 'cyan';
  defaultColor = 'red';
  constructor() {}

  ngOnInit() {}
  changeColor(color: any) {
    this.color = color;
  }
  resetDefaultColor() {
    this.color = this.defaultColor;
  }
}
