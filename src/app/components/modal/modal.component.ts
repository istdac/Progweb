import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    $('#analizarPub').hide();
  }

  analizarPublicacion() {
    
  }

}
