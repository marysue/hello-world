import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'app/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors = [];
  numAuthors = 0;

  constructor(service: AuthorsService) 
  { 
    this.authors = service.getAuthors();
    this.numAuthors = this.authors.length;


  }

  ngOnInit() {
  }

}
