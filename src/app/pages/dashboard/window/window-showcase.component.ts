import { Component } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'ngx-window-button',
  template: `<button (click)="createItem()" class="btn-create" nbButton status="primary">Create Item</button>`,
  styleUrls: [ './window.scss' ],
})
export class WindowShowcaseComponent {

  constructor(private windowService: NbWindowService) {}

  createItem() {
    var wref=  this.windowService.open(FormComponent, 
      { 
        title: `Create new Item`, 
        context: {
          isEdit: false,
        }
      });
  } 
} 
