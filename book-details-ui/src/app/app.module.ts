import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { PagesComponent } from './pages/pages.component';
import { CoreConceptsComponent } from './pages/core-concepts/core-concepts.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    IntroductionComponent,
    CoreConceptsComponent,
    PlaygroundComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
