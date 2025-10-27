import { Component, OnInit } from '@angular/core';
import { ITreeOptions, TreeModule } from '@talentia/angular-tree-component';

@Component({
    selector: 'app-scrollcontainer',
    template: `
  <div style="height: 300px; width: 200px;border: 1px solid grey">Padding</div>
  <div>
    <tree-root
      #tree
      [nodes]="nodes"
      [options]="options"
      [focused]="true"
    ></tree-root>
  </div>
  `,
    imports: [TreeModule]
})
export class ScrollContainerComponent implements OnInit {
  nodes: any[] = [];
  options: ITreeOptions = {
    scrollContainer: document.body.parentElement as HTMLElement
  };

  ngOnInit() {
    for (let i = 0; i < 200; i++) {
      this.nodes.push({
        name: `rootDynamic${i}`,
        subTitle: `root created dynamically ${i}`
      });
    }
  }

}
