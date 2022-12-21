import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Template handler labels
  clicked: string = '';
  changed: string = '';
  keyuped: string = '';
  entered: string = '';
  blured: string = '';

  public OnClick() {
    this.clicked = 'On Clicked handler !';
  }
  public OnChange($event: any) {
    this.changed = 'OnChange Handler with value : ' + $event.target.value;
  }
  public OnKeyUp($event: any) {
    this.keyuped = 'OnKeyup Handler with value : ' + $event.target.value;
  }
  public OnEnter($event: any) {
    this.entered = 'OnEnter Handler with value : ' + $event.target.value;
  }
  public OnBlur($event: any) {
    this.blured = 'OnBlur Handler with value : ' + $event.target.value;
  }
}
