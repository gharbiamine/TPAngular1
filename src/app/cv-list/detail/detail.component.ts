import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../Model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = {
    id: 1,
    name: 'Gharbi',
    firstname: 'Amine',
    age: 21,
    path: '/',
    cin: 14423,
    job: 'student',
  };
  constructor(private router: Router) {}

  ngOnInit() {}
}
