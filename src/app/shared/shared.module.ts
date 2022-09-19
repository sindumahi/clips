import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsConatainerComponent } from './tabs-conatainer/tabs-conatainer.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
//import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    ModalComponent,
    TabsConatainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ModalComponent,
    TabsConatainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent
  ]
})
export class SharedModule { }
