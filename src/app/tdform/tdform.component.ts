import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent {
  defaultcourse="Select Study";
  defaultblood="Select Blood Group";
  defaultProfession="select Profession";
  defaulttype="select job type";
  defaulttype2="select Business type";

  ngform= new FormGroup({
    firstname:new FormControl('' ,[Validators.required]),
    middlename:new FormControl(''),
    lastname:new FormControl(''),
  })
  
  onsubmit(form:NgForm){
    console.log(form);
  }

  get firstname(){
    return this.ngform.get('firstname')
  }
}
