import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private ps: PeopleService) { }

  people: any;

  ngOnInit() {
    this.ps.getAll().subscribe(pp => this.people = pp);
  }

  remove(p:any){
    let c = confirm('Do you want to delete?');
    if(c)
      this.ps.deleteOne(p);
  }
}
