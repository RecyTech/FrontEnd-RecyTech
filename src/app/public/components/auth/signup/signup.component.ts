import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {User} from "../../../model/user.entity";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private userService:UserService){

  }


  newUser: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  addUser(){
    let id = Math.random().toString(36).substring(2);


    let name=this.newUser.get("name")?.value;
    let email=this.newUser.get("email")?.value;
    let password=this.newUser.get("password")?.value;
    console.log(name)
    const user = new User(id,name,email,password);

    this.userService.create(user).subscribe((response) => {
      console.log('User created successfully', response);
    });

  }
}
