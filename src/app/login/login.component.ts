import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  foods = [
    {value: '0', viewValue: 'IRO'},
    {value: '1', viewValue: 'RBT'},
    {value: '2', viewValue: 'RBD'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
