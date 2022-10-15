import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavserviceService {

  constructor(private router: Router) { }

  starhouseNavigate(): void {
    document.location.href = 'https://starhouse.us';
  }

  home(): void {
    this.router.navigateByUrl('');
  }
}
