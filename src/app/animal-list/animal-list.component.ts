import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { Sector } from '../models/sector';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: Array<Object>;
  sectors: Array<Object>;
  species;
  name;
  dateOfBirth;
  sector;

  constructor() {
    this.sectors=
    [
      new Sector('Sector 1', 'Surface 1'),
      new Sector('Sector 2', 'Surface 2'),
      new Sector('Sector 3', 'Surface 3')
    ]

    this.animals=
    [
      new Animal('horse', 'Konj', '01-02-03', this.sectors[1]),
      new Animal('tiger', 'Tigar', '01-01-01', this.sectors[2]),
      new Animal('lion', 'Lav', '', this.sectors[0]),
      new Animal('monkey', 'Majmun', '05-07-02', this.sectors[0]),
      new Animal('fox', 'Lisica', '', this.sectors[0]),
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

   addAnimal()
   {
     this.animals.push(new Animal(this.species, this.name, this.dateOfBirth, this.sector));
   }

   showAnimals(sector)
   {
      const animals = [];

      for(let i=0; i < this.animals.length; i++)
      {
        if(this.animals[i]['sector'] === sector)
        {
          animals.push(this.animals[i]['name']);
        }
      }

      alert(animals.join('\n'));
   }

  ngOnInit() {
  }

}
