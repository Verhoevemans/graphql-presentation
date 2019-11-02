import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { PagesComponent } from './pages/pages.component';
import { CoreConceptsComponent } from './pages/core-concepts/core-concepts.component';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';


const routes: Routes = [
  { path: '', redirectTo: '/graphql', pathMatch: 'full' },
  { path: 'graphql', component: PagesComponent, children: [
      { path: 'introduction', component: IntroductionComponent },
      { path: 'core-concepts', component: CoreConceptsComponent },
      { path: 'conclusion', component: ConclusionComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
