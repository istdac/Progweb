import { Component } from '@angular/core';
import $ from 'jquery';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-progweb';
  AddPostArea(){
    $('#analizarPub').show();
  }
}
