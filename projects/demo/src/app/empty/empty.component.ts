import { Component } from '@angular/core';
import { TreeModule } from '@talentia/angular-tree-component';

@Component({
    selector: 'app-empty',
    template: `
    <tree-root #tree1 id="tree1" [focused]="true" [nodes]="nodes"></tree-root>
    <tree-root #tree2 id="tree2" [focused]="true" [nodes]="nodes2"></tree-root>
    <button (click)="loadNodes()">loadNodes 1</button>
  `,
    imports: [TreeModule]
})
export class EmptyComponent {
  nodes: any[] = [];
  nodes2: any[] | null = null;

  loadNodes() {
    this.nodes = [{ name: 'node' }];
    this.nodes2 = [{ name: 'node' }];
  }
}
