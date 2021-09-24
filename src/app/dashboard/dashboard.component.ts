import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allBooks: Array<any> = [];

  constructor(private dataService: DataServiceService) { }
  
  ngOnInit(): void {
    this.allBooks = this.dataService.books;
   
  }

  
    
  
}


