import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';

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
      new Animal('horse', 'Konj', '01-02-03'),
      new Animal('tiger', 'Tigar', '01-01-01'),
      new Animal('lion', 'Lav'),
      new Animal('monkey', 'Majmun', '05-07-02'),
      new Animal('fox', 'Lisica', ''),
    ];
   }

   removeAnimal(animal)
   {
     let index = this.animals.indexOf(animal);
     this.animals.splice(index, 1);
   }

   moveToTop(animal)
   {
    this.removeAnimal(animal);
    this.animals.unshift(animal);
   }

  ngOnInit() {
  }

}
