import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Create your collection in your typescript file
  public languages = [
    {
      name: 'Angular',
    },
    {
      name: 'Python',
    },
    {
      name: 'C/C++',
    },
  ];
}
