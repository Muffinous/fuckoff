import { Component, OnInit } from '@angular/core';
import { faAndroid, faAngular, faCss3, faCuttlefish, faDocker, faGithub, faHtml5, faJava, faJs, faNodeJs, faPython, faUnity } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faSquareFull, faVideoSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  faAngular = faAngular;
  faHtml = faHtml5;
  faCss = faCss3;
  faDocker = faDocker;
  faGithub = faGithub;
  faJava = faJava;
  faPython = faPython;
  faC = faCuttlefish;
  faNodejs = faNodeJs;
  faJS = faJs;
  faUnity = faUnity;
  faSQL = faDatabase;
  faAndroid = faAndroid;
  
  constructor( ) {
   }
   
  ngOnInit(): void {  
  }
}
