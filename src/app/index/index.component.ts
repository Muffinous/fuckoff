import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    this.consoleText(['Hello, Stranger.'], 'text',['lightblue']);
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent): void  { 
    console.log(event.clientX)
    var pupils = Array.from(document.getElementsByClassName('eye-pupil') as HTMLCollectionOf<HTMLElement>)

    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerWidth + "%";
    
    for(var i=0; i<2; i++) {
        pupils[i].style.left = x;
        pupils[i].style.top = y;
        pupils[i].style.transform = "translate(-"+x+", -"+y+")";

    }
  }


  consoleText(words: any, id: string, colors: any): void {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    let target = document.getElementById(id) as HTMLFormElement;
    if (target != null) {
      target.setAttribute('style', 'color:' + colors[0])
      window.setInterval(function() {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function() {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function() {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount)
          letterCount += x;
        }
      }, 120)
      window.setInterval(function() {
        if (con != null) {
          if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;
  
          } else {
            con.className = 'console-underscore'
            visible = true;
          }
        }
      }, 400)
    }
  }
}
