import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from '@talentia/angular-tree-component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    FullTreeComponent,
    BasicTreeComponent,
    TemplatesComponent,
    FieldsComponent,
    FilterComponent,
    EmptyComponent,
    RtlTreeComponent,
    AsyncTreeComponent,
    SaveRestoreComponent,
    CheckboxesComponent,
    DragComponent,
    DragOverStylingComponent,
    DragOverStylingFullTreeComponent,
    VirtualscrollComponent,
    ApiComponent,
    ActionsComponent,
    ScrollContainerComponent,
    ContextmenuComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
