import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  NgZone,
  OnDestroy,
  Output,
  Renderer2
} from '@angular/core';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';

const DRAG_OVER_CLASS = 'is-dragging-over';
const DRAG_DISABLED_CLASS = 'is-dragging-over-disabled';

@Directive({
  standalone: false,
  selector: '[treeDrop]'
})
export class TreeDropDirective implements AfterViewInit, OnDestroy {
  @Input() allowDragoverStyling = true;
  @Output('treeDrop') onDropCallback = new EventEmitter();
  @Output('treeDropDragOver') onDragOverCallback = new EventEmitter();
  @Output('treeDropDragLeave') onDragLeaveCallback = new EventEmitter();
  @Output('treeDropDragEnter') onDragEnterCallback = new EventEmitter();

  private readonly dragOverEventHandler: (ev: DragEvent) => void;
  private readonly dragEnterEventHandler: (ev: DragEvent) => void;
  private readonly dragLeaveEventHandler: (ev: DragEvent) => void;

  private _allowDrop = (element, $event) => true;

  private el: ElementRef;
  private renderer: Renderer2;
  private treeDraggedElement: TreeDraggedElement;
  private ngZone: NgZone;

  @Input() set treeAllowDrop(allowDrop) {
    if (allowDrop instanceof Function) {
      this._allowDrop = allowDrop;
    }
    else this._allowDrop = (element, $event) => allowDrop;
  }

  allowDrop($event) {
    return this._allowDrop(this.treeDraggedElement.get(), $event);
  }

  constructor() {
    this.el = inject(ElementRef);
    this.renderer = inject(Renderer2);
    this.treeDraggedElement = inject(TreeDraggedElement);
    this.ngZone = inject(NgZone);

    this.dragOverEventHandler = this.onDragOver.bind(this);
    this.dragEnterEventHandler = this.onDragEnter.bind(this);
    this.dragLeaveEventHandler = this.onDragLeave.bind(this);
  }

  ngAfterViewInit() {
    const el: HTMLElement = this.el.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      el.addEventListener('dragover', this.dragOverEventHandler);
      el.addEventListener('dragenter', this.dragEnterEventHandler);
      el.addEventListener('dragleave', this.dragLeaveEventHandler);
    });
  }

  ngOnDestroy() {
    const el: HTMLElement = this.el.nativeElement;
    el.removeEventListener('dragover', this.dragOverEventHandler);
    el.removeEventListener('dragenter', this.dragEnterEventHandler);
    el.removeEventListener('dragleave', this.dragLeaveEventHandler);
  }

  onDragOver($event) {
    if (!this.allowDrop($event)) {
      if (this.allowDragoverStyling) {
        return this.addDisabledClass();
      }
      return;
    }

    this.onDragOverCallback.emit({event: $event, element: this.treeDraggedElement.get()});

    $event.preventDefault();
    if (this.allowDragoverStyling) {
      this.addClass();
    }
  }

  onDragEnter($event) {
    if (!this.allowDrop($event)) return;

    $event.preventDefault();
    this.onDragEnterCallback.emit({event: $event, element: this.treeDraggedElement.get()});
  }

  onDragLeave($event) {
    if (!this.allowDrop($event)) {
      if (this.allowDragoverStyling) {
        return this.removeDisabledClass();
      }
      return;
    }
    this.onDragLeaveCallback.emit({event: $event, element: this.treeDraggedElement.get()});

    if (this.allowDragoverStyling) {
      this.removeClass();
    }
  }

  @HostListener('drop', ['$event']) onDrop($event) {
    if (!this.allowDrop($event)) return;

    $event.preventDefault();
    this.onDropCallback.emit({event: $event, element: this.treeDraggedElement.get()});

    if (this.allowDragoverStyling) {
      this.removeClass();
    }
    this.treeDraggedElement.set(null);
  }

  private addClass() {
    this.renderer.addClass(this.el.nativeElement, DRAG_OVER_CLASS);
  }

  private removeClass() {
    this.renderer.removeClass(this.el.nativeElement, DRAG_OVER_CLASS);
  }

  private addDisabledClass() {
    this.renderer.addClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
  }

  private removeDisabledClass() {
    this.renderer.removeClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
  }
}
