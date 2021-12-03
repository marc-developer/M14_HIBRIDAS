import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  deportes = [{"name" : "Fifa22", "plataforma" : "Ps5, Xbox, Pc", "developers": "EA Sports", "puntuacio": "78", "img" : "fifa22.jpeg"},
              {"name" : "eFootball22","plataforma" : "Ps5, Xbox, Pc", "developers": "Konami", "puntuacio": "29", "img" : "efootball.jpeg"},
              {"name" : "nba 2k22", "plataforma" : "Ps5, Xbox, Pc", "developers" : "Visula Concepts", "puntuacio": "76", "img" : "nba2k22.jpeg"},
              {"name" : "MadenNFL 21", "plataforma" : "Ps5, Xbox, Pc", "developers" : "EA Sports", "puntuacio" : "63", "img" : "maden21.png"}]
}
