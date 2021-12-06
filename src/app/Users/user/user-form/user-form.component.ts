import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { UserService } from 'src/app/services/userservice';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

users :any[]
userSubcription: Subscription

  constructor(private userservice : UserService) { }

  ngOnInit() {
  }
onSubmit(form: NgForm){
  console.log(form.value)
}


}
