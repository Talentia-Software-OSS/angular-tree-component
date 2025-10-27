import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';

@Component({
  standalone: false,
  selector: 'tree-node-expander',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ng-container *treeMobxAutorun="{ dontDetach: true }">
      @if (node.hasChildren) {
        <span
          [class.toggle-children-wrapper-expanded]="node.isExpanded"
          [class.toggle-children-wrapper-collapsed]="node.isCollapsed"
          class="toggle-children-wrapper"
          (click)="node.mouseAction('expanderClick', $event)"
          >
          <span class="toggle-children"></span>
        </span>
      }
      @if (!node.hasChildren) {
        <span class="toggle-children-placeholder">
        </span>
      }
    </ng-container>
  `
})
export class TreeNodeExpanderComponent {
  @Input() node: TreeNode;
}
