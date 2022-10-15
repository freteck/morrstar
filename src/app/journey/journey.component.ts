import { Component, OnInit } from '@angular/core';
import { NavserviceService } from '../navservice.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  constructor(public nav: NavserviceService) { }

  ngOnInit(): void {
  }

}
