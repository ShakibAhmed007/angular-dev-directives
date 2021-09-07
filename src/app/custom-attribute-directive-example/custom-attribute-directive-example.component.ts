import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-attribute-directive-example',
  templateUrl: './custom-attribute-directive-example.component.html',
  styleUrls: ['./custom-attribute-directive-example.component.css']
})
export class CustomAttributeDirectiveExampleComponent implements OnInit {
  color = 'red';

  constructor() {}

  ngOnInit() {}
}
