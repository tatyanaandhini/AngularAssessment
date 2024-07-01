import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee';
import { User } from './model/user';
import { Constants } from './shared/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'backoffice-assessment';

  constructor() {
    for (let i = 1; i <= 100; i++) {
      Constants.USERS.push(createEmployee());
    }
  }
}

function createEmployee(): Employee {
  let firstName = Constants.FIRSTNAME[Math.round(Math.random() * (Constants.FIRSTNAME.length - 1))];
  let lastName = Constants.LASTNAME[Math.round(Math.random() * (Constants.LASTNAME.length - 1))]
  let status = Constants.STATUS[Math.round(Math.random() * (Constants.STATUS.length - 1))];
  let group = Constants.GROUP[Math.round(Math.random() * (Constants.GROUP.length - 1))];

  let employee: Employee = {
    firstName: firstName,
    lastName: lastName,
    username: (firstName + '_' + lastName).toLocaleLowerCase(),
    email: (firstName + '.' + lastName.charAt(0)).toLocaleLowerCase() + "@mail.com",
    status: status,
    group: group,
    basicSalary: Math.round((Math.random() * (11000000 + 1) + 4000000)),
    birthDate: randomBirthDate(),
    description: randomDescription()
  }

  return employee;
}

function randomBirthDate() {
  var start = new Date('1990-01-01');
  var end = new Date('2000-12-31');

  var date = new Date(+start + Math.random() * (end.getTime() - start.getTime()));
  return date;
}

function  randomDescription() {
  var start = new Date('2012-01-01');
  var end = new Date('2024-12-31');

  var date = new Date(+start + Math.random() * (end.getTime() - start.getTime()));
  return date;
}