import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'portfolio',
    component: PortfolioComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
