import { Component } from '@angular/core';
import { FormService } from './form/form.service';
import { FormComponent } from './form/form.component';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:["./dashboard.scss"]
})
export class DashboardComponent {

  configIcon = {
    icon: 'edit-outline',
    pack: 'eva',
  }; 
  Items = []

  constructor(private formService: FormService, private windowService: NbWindowService){
    this.Items = formService.getData();
  }

  EditItem(value) {
    var wref=  this.windowService.open(FormComponent, 
      { 
        title: `Edit Item`, 
        context: {
          isEdit: true,
          editItem: value
        }
      });
  }

}
