import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullTreeComponent } from './fulltree/fulltree.component';
import { ActionsComponent } from './actions/actions.component';
import { ApiComponent } from './api/api.component';
import { AsyncTreeComponent } from './async/async.component';
import { BasicTreeComponent } from './basictree/basictree.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import { DragComponent } from './drag/drag.component';
import { DragOverStylingFullTreeComponent } from './dragover-styling/dragover-styling-full-tree.component';
import { DragOverStylingComponent } from './dragover-styling/dragover-styling.component';
import { EmptyComponent } from './empty/empty.component';
import { FieldsComponent } from './fields/fields.component';
import { FilterComponent } from './filter/filter.component';
import { RtlTreeComponent } from './rtl/rtl-tree.component';
import { SaveRestoreComponent } from './save-restore/save-restore.component';
import { ScrollContainerComponent } from './scrollcontainer/scrollcontainer.component';
import { TemplatesComponent } from './templates/templates.component';
import { VirtualscrollComponent } from './virtualscroll/virtualscroll.component';

const routes: Routes = [
  {
    path: '',
    component: FullTreeComponent
  },
  {
    path: 'basic',
    component: BasicTreeComponent
  },
  {
    path: 'fields',
    component: FieldsComponent
  },
  {
    path: 'templates',
    component: TemplatesComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'empty',
    component: EmptyComponent
  },
  {
    path: 'rtl',
    component: RtlTreeComponent
  },
  {
    path: 'async',
    component: AsyncTreeComponent
  },
  {
    path: 'save-restore',
    component: SaveRestoreComponent
  },
  {
    path: 'checkboxes',
    component: CheckboxesComponent
  },
  {
    path: 'drag',
    component: DragComponent
  },
  {
    path: 'dragover-styling',
    component: DragOverStylingComponent
  },
  {
    path: 'dragover-styling-full-tree',
    component: DragOverStylingFullTreeComponent
  },
  {
    path: 'virtual',
    component: VirtualscrollComponent
  },
  {
    path: 'api',
    component: ApiComponent
  },
  {
    path: 'actions',
    component: ActionsComponent
  },
  {
    path: 'scroll-container',
    component: ScrollContainerComponent
  },
  {
    path: 'context-menu',
    component: ContextmenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
