import { Component, Input, ViewEncapsulation, TemplateRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';

@Component({
  standalone: false,
  selector: 'tree-node-content',
  encapsulation: ViewEncapsulation.None,
  template: `
  @if (!template) {
    <span>{{ node.displayField }}</span>
  }
  <ng-container
    [ngTemplateOutlet]="template"
    [ngTemplateOutletContext]="{ $implicit: node, node: node, index: index }">
  </ng-container>
  `,
})
export class TreeNodeContentComponent {
  @Input() node: TreeNode;
  @Input() index: number;
  @Input() template: TemplateRef<any>;
}
