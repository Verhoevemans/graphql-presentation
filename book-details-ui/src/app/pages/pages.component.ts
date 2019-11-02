import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  
  activeRoute: string;
  
  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.activeRoute = this.router.url;
    
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.activeRoute = value.urlAfterRedirects;
      }
    })
  }
  
}
