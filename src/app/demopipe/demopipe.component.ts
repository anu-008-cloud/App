import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css']
})
export class DemopipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title="Malappuram";
today=Date();
user={
  id:100,
  name:"Anu",
  DOB:'08-11-1999',
  salary:25000

}


}
