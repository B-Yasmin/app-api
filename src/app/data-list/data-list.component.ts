import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  data: any[] = [];
  loading = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      this.loading = false;
    });
  }

  clearCache(): void {
    this.dataService.clearCache();
    this.loading = true;
    this.ngOnInit();
  }
}
