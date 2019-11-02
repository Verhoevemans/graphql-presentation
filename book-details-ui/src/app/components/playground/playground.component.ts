import { Component, Input } from '@angular/core';
import { PlaygroundService } from './playground.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
  
  @Input() initialQuery: string;
  graphQLResponse;
  
  constructor(private playgroundService: PlaygroundService) { }
  
  onTab(event) {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    event.target.value = event.target.value.substring(0, start) + '\t' + event.target.value.substring(end);
    event.target.selectionStart = start + 1;
    event.target.selectionEnd = start + 1;
  }
  
  sendRequest() {
    let request = this.initialQuery.replace('query {', '{');
    request = request.concat('"}');
    
    this.playgroundService.sendGraphQLRequest(request).subscribe((result) => {
      this.graphQLResponse = result;
    })
  }

}
