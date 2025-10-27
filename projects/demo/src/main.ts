import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { TreeModule } from '@talentia/angular-tree-component';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(FormsModule, CommonModule, BrowserModule, AppRoutingModule, TreeModule),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
