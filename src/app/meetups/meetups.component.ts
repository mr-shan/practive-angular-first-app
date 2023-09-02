import { Component } from '@angular/core';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.css']
})

export class MeetupsComponent {
  title: string = 'Sign Up for Meetups!';
  firstName: string = '';
  lastName: string = '';
  notificationMessage: string = '';
  people: Array<string> = [

  ];

  onSubmit() {
    const newEntry = `${this.firstName} ${this.lastName}`;
    this.people.push(newEntry)
    this.notificationMessage = `New user added! ${newEntry}`;
    this.firstName = '';
    this.lastName = '';
    setTimeout(() => {
      this.notificationMessage = ''
    }, 3000)
  }

  isFormValid() {
    return this.firstName && this.lastName;
  }
}
