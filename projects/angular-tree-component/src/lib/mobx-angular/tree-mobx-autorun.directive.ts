import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  OnInit,
  OnDestroy,
  Input,
  EmbeddedViewRef,
  inject
} from '@angular/core';
import { autorun } from 'mobx';

@Directive({ 
  standalone: false,
  selector: '[treeMobxAutorun]' 
})
export class TreeMobxAutorunDirective implements OnInit, OnDestroy {
  @Input() treeMobxAutorun;

  protected templateBindings = {};
  protected dispose: any;
  protected view: EmbeddedViewRef<any>;
  protected templateRef: TemplateRef<any>;
  protected viewContainer: ViewContainerRef;

  constructor() {
    this.templateRef = inject(TemplateRef<any>);
    this.viewContainer = inject(ViewContainerRef);
  }

  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.templateRef);

    if (this.dispose) {
      this.dispose();
    }

    if (this.shouldDetach()) {
      this.view.detach();
    }
    this.autoDetect(this.view);
  }

  shouldDetach() {
    return this.treeMobxAutorun && this.treeMobxAutorun.detach;
  }

  autoDetect(view: EmbeddedViewRef<any>) {
    this.dispose = autorun(() => view.detectChanges());
  }

  ngOnDestroy() {
    if (this.dispose) {
      this.dispose();
    }
  }
}
