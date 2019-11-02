import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-concepts',
  templateUrl: './core-concepts.component.html',
  styleUrls: ['./core-concepts.component.scss']
})
export class CoreConceptsComponent implements OnInit {
  
  activePage: number;
  query: string;
  mutation: string;
  queryScenarios = [
    '\nquery {\n\tgreeting\n}',
    '\nquery {\n\tbooks {\n\t\tname\n\t\tpageCount\n\t\tauthor{\n\t\t\tfirstName\n\t\t}\n\t}\n}',
    '\nquery {\n\tbooks(count: 3) {\n\t\tname\n\t\tpageCount\n\t\tauthor {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n}'
  ];
  mutationScenarios = [
    '\nmutation {\n\tcreateAuthor(firstName: "Harry", lastName: "Mullisch") {\n\t\tid\n\t\tfirstName\n\t}\n}',
    '\nquery {\n\tauthors{\n\t\tid\n\t\tfirstName\n\t\tlastName\n\t}\n}'
  ];

  constructor() { }

  ngOnInit() {
    this.query = this.queryScenarios[0];
    this.mutation = this.mutationScenarios[0];
  }
  
  setQueryScenario(scenario) {
    this.query = this.queryScenarios.slice(scenario - 1, scenario)[0];
  }
  
  setMutationScenario(scenario) {
    this.mutation = this.mutationScenarios.slice(scenario - 1, scenario)[0];
  }

}
