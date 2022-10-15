import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavserviceService } from '../navservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  picId = "fig0"

  constructor(private router: Router, public nav: NavserviceService) { }

  ngOnInit(): void {
  }

}
