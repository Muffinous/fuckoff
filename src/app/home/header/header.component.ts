import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  open: Boolean = false;
  @ViewChild('namebutton', { read: ElementRef, static: false })
  namebutton!: ElementRef;

  constructor(private _rd: Renderer2) {   
  }

  ngOnInit(): void {
  }
   
  actionButton() {
    console.log("eojf")
    this.namebutton.nativeElement.classList.add('bi-x')
    setTimeout(() => {
      this.namebutton.nativeElement.classList.remove('bi-list')
    }, 1000);
  }

   changeIcon() {    
     console.log(this.open); 
  //   console.log(this.open);
  //   console.log("click");
  //   this.open = !open;
  //   console.log(this.open);
   }

  // on('click', '.mobile-nav-toggle', function(e) {
  //   select('body').classList.toggle('mobile-nav-active')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  // })
}

