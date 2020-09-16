import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbWindowModule, NbButtonModule, NbIconModule, NbInputModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { FormComponent } from './form/form.component';
import { WindowShowcaseComponent } from './window/window-showcase.component';

import  { FormService } from './form/form.service';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbWindowModule,
    FormsModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule
  ],
  declarations: [
    DashboardComponent,
    FormComponent,
    WindowShowcaseComponent
  ],
  providers:[
    FormService
  ]
})
export class DashboardModule { }
