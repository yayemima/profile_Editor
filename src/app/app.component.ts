import { Component } from '@angular/core';
 import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
    user: User = {
    name: 'Araya',
    age: 36,
    favoriteColor: 'White'
  }

formUser:User = {...this.user};

 displayEdit: boolean = false;

 toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
 }

saveChanges(): void {
  this.user = {...this.formUser};
  this.displayEdit = false;  
  }
}