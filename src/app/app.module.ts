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
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from './login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent, NavmenuComponent, LearnerProfileComponent, HeaderComponent,
    LearnerPoeComponent, LearnerGradeBookComponent, CoursesComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LearnerProfileComponent, canActivate: [Login] },
      { path: 'learnerProfile', component: LearnerProfileComponent, canActivate: [Login] },
      { path: 'learnerPoe', component: LearnerPoeComponent, canActivate: [Login] },
      { path: 'courses', component: CoursesComponent, canActivate: [Login] },
      { path: 'learnerGradeBook', component: LearnerGradeBookComponent, canActivate: [Login] },
      { path: 'login', component: LoginComponent }

    ]),
    NgbModule.forRoot(),
    ButtonModule
  ],
  providers: [Login],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
