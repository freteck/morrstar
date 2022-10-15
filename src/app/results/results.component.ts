import { Component, OnInit } from '@angular/core';
import { NavserviceService } from '../navservice.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(public nav: NavserviceService) { }

  ngOnInit(): void {
  }

}
