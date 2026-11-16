import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { TreeModule } from '@talentia/angular-tree-component';
import { AppComponent } from './app/app.component';
import { importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(FormsModule, BrowserModule, AppRoutingModule, TreeModule),
        provideZoneChangeDetection()
    ]
})
  .catch(err => console.error(err));
