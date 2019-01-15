import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Our array of features
  features: any[];
  dataTable: any;

  constructor(private http: HttpClient, private chRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get('https://5c3d78b8a9d04f0014a98a1b.mockapi.io/mp/features')
      .subscribe((data: any[]) => {
        this.features = data;

        // You'll have to wait that changeDetection occurs and projects data into
        // the HTML template, you can ask Angular to that for you ;-)
        this.chRef.detectChanges();

        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable();
      });
  }
}
