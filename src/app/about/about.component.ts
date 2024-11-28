import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../guard/can-deactivate.guard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements CanComponentDeactivate{

  hasUnsavedChanges = false;

  canDeactivate(): boolean {
    console.log('CanDeactivate guard triggered.');
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;

  }

  ngOnInit() {
    console.log(this.canDeactivate()); // This should trigger the dialog if `hasUnsavedChanges` is true.
  }

}
