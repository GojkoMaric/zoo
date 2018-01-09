import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: Array<Object>;

  constructor() {
    this.animals=
    [
      {
        type: 'tiger',
        name: 'Tigar',
        date: '01-01-01' 
      },
      {
        type: 'lion',
        name: 'Lav',
        date: '02-03-02'
      },
      {
        type: 'monkey',
        name: 'Marmun',
        date: '05-07-02'
      },
      {
        type: 'fox',
        name: 'Lisica',
        date: '09-08-06'
      },
      {
        type: 'bear',
        name: 'Medved',
        date: ''
      }

    ];
   }

  ngOnInit() {
  }

}
