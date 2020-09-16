import { Component } from '@angular/core';
import { NbWindowRef, NbWindowState } from '@nebular/theme';
import { FormService } from './form.service';

@Component({
  templateUrl: './form.component.html',
})
export class FormComponent {

  myForm: ITextWindow;
  isEdit: boolean;

  constructor(public windowRef: NbWindowRef, private formService: FormService) {  

    this.windowRef.stateChange.subscribe((state)=>{

      if(state.oldState=== undefined && state.newState==="full-screen"){

        if (this.windowRef.config.context) { 

          this.isEdit = this.windowRef.config.context.hasOwnProperty('isEdit') ?
          this.windowRef.config.context['isEdit'] : false ;      
    
          if (this.isEdit){
            this.myForm =  this.windowRef.config.context['editItem'];
          }
          else {
            this.myForm = new TextWindow();
          } 
        }
       
        this.formService.setMyform(this.myForm); 
      }
      else  
        this.myForm = this.formService.getMyform();
        
    }) 
  }

  close() {
    this.windowRef.close();
  }
}

export class TextWindow { 
    id =  Math.floor(Math.random() * 500);  ;
    firstName = null;
    lastName = null;
    username = null;
    email = null;
    age = null;
    constructor(data?:ITextWindow) {
      if(data!== undefined){
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.username = data.username;
        this.email = data.email;
        this.age = data.age;
      }      
    }
}

export interface ITextWindow {
    id: number;
    firstName:string;
    lastName: string
    username: string;
    email: string;
    age: number;  
}