import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.css']
})
export class BuiltInDirectivesComponent implements OnInit {
  isSpecial = false;

  /**
   * This will add three class to div
   */
  currentClasses = {
    saveable: true, // bold
    modified: true, // italic
    special: true // background
  };

  currentStyles = {
    'font-style': true ? 'italic' : 'normal',
    'font-weight': true ? 'bold' : 'normal',
    'font-size': true ? '24px' : '12px'
  };

  constructor() {}

  ngOnInit() {}
}
