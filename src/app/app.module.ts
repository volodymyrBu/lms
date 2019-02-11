import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavmenuComponent } from './component/navmenu/navmenu.component';
import { LearnerProfileComponent } from './component/learner-profile/learner-profile.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { LearnerPoeComponent } from './component/learner-poe/learner-poe.component';
import { LearnerGradeBookComponent } from './component/learner-gradeBook/learner-gradeBook.component';
import { CoursesComponent } from './component/courses/courses.component';



@NgModule({
  declarations: [
    AppComponent, NavmenuComponent, LearnerProfileComponent, HeaderComponent,
    LearnerPoeComponent, LearnerGradeBookComponent, CoursesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LearnerProfileComponent },
      { path: 'learnerProfile', component: LearnerProfileComponent },
      { path: 'learnerPoe', component: LearnerPoeComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'learnerGradeBook', component: LearnerGradeBookComponent }

    ]),
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
