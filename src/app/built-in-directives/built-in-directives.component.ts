import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.css']
})
export class BuiltInDirectivesComponent implements OnInit {
  isSpecial = false;

  /**
   * This will add three class to div [ngClass]
   */
  currentClasses = {
    saveable: true, // bold
    modified: true, // italic
    special: true // background
  };

  /**
   * This will add styles to div [ngStyle]
   */
  currentStyles = {
    'font-style': true ? 'italic' : 'normal',
    'font-weight': true ? 'bold' : 'normal',
    'font-size': true ? '24px' : '12px'
  };

  name: string = '';

  showContent = true;
  items = [
    {
      id: 1,
      name: 'Shakib'
    },
    {
      id: 2,
      name: 'Shakil'
    }
  ];

  conditionalData = 'https';

  constructor() {}

  ngOnInit() {}

  trackByItems(index: number, item: any): number {
    return item.id;
  }
}
