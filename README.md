# Angular Template Statement Functions

---

Learn how to use function events (click, hover, ...).

## Table of Contents

- [Usage](#usage)

## HTML Template (app.component.html)

```html
<h3>Click event</h3>
<button type="button" (click)="OnClick()">Click Button</button>
<p>{{ clicked }}</p>

<h3>Change event (Press Enter to validate)</h3>
<input (change)="OnChange($event)" />
<p>{{ changed }}</p>

<h3>Keyup event</h3>
<input (keyup)="OnKeyUp($event)" />
<p>{{ keyuped }}</p>

<h3>On Enter event</h3>
<input (keyup.enter)="OnEnter($event)" />
<p>{{ entered }}</p>

<h3>On Blur event (loose focus, outside input)</h3>
<input (blur)="OnBlur($event)" />
<p>{{ blured }}</p>
```

## Typescript (app.component.ts)

```typescript
  // HTML Labels rendered
  clicked: string = '';
  changed: string = '';
  keyuped: string = '';
  entered: string = '';
  blured: string = '';

  // Handler functions
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
```
