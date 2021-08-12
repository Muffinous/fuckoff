import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  open: Boolean = true;
  @ViewChild('navbutton', { read: ElementRef, static: false })
  navbutton!: ElementRef;

  constructor(private _rd: Renderer2) {   
  }

  ngOnInit(): void {
  }
   
  changeIcon() {    
     console.log(this.open); 
     this.open = !open;
     console.log(this.open);
  }

  // on('click', '.mobile-nav-toggle', function(e) {
  //   select('body').classList.toggle('mobile-nav-active')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  // })
}

