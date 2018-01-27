import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DodgeModule } from './dodge/dodge.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DodgeComponent } from './dodge/dodge.component';

import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';

import * as Hammer from 'hammerjs';

import { AppComponent } from './app.component';

export class customHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pan: { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [AppComponent, DodgeComponent],
  imports: [
    BrowserModule,
    DodgeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: customHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
