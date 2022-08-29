import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Profile Editor';

  formUser: User = {
    name: 'Araya',
    age:36,
    favoriteColor: 'White',
  };


  displayEdit: boolean = false;
  user: any;

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
    if(this.displayEdit)
    this.title = 'Update User Information'
    else
    this.title = 'User Information'
  }

saveChanges(): void {
  this.user.name = this.formUser.name;
  this.user.age = this.formUser.age;
  this.user.favoriteColor = this.formUser.favoriteColor;
  
  }
}