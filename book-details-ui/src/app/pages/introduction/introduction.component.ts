import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  
  activePage: number;
  architecture: number;
  scenarioNumber: number = null;

  constructor() { }

  ngOnInit() {}
  
  getImgSource(): string {
    console.log('getting image');
    return `../../../assets/img/rest-scenarios/scenario-${this.scenarioNumber}.jpg`;
  }
  
  getArchitectureImgSource(): string {
    return `../../../assets/img/architectures/architecture-${this.architecture}.png`;
  }
  
  previousScenario() {
    if (this.scenarioNumber === null) {
      return;
    } else if (this.scenarioNumber === 1) {
      this.scenarioNumber = null;
    } else {
      this.scenarioNumber = this.scenarioNumber - 1;
    }
  }
  
  nextScenario() {
    if (this.scenarioNumber === null) {
      this.scenarioNumber = 1;
    } else if (this.scenarioNumber === 8) {
      this.scenarioNumber = null;
    } else {
      this.scenarioNumber = this.scenarioNumber + 1;
    }
  }

}
