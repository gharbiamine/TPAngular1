import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'Gharbi', 'Amine', 21, 'amine.jpg', 2, '--'),
      new Personne(2, 'Fattouch', 'Alaeddine', 22, 'ala.jpg', 3, 'technicien'),
      new Personne(2, 'Ouerdiane', 'Nader', 22, 'nader.jpg', 3, 'technicien'),
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
  @Output() sendPersonneToCv = new EventEmitter<Personne>();

  ngOnInit() {}
  sendItem(personne: Personne) {
    this.sendPersonneToCv.emit(personne);
  }
}
