import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component'; // Make sure the path is correct
import { CatState } from './store/cat.state';
import {CatSearchComponent} from './components/cat-search/cat-search.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCard, MatCardImage} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // Make sure the path is correct

@NgModule({
  declarations: [
    AppComponent,
    CatSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCard,
    HttpClientModule,
    NgxsModule.forRoot([CatState]),
    MatCardImage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
