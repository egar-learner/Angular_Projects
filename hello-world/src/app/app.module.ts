import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { ClassBindComponent } from './class-bind/class-bind.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { IfNgIfComponent } from './if-ng-if/if-ng-if.component';
import { SwitchNgSwtichComponent } from './switch-ng-swtich/switch-ng-swtich.component';
import { ForNgForComponent } from './for-ng-for/for-ng-for.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesInInterpolationComponent } from './pipes-in-interpolation/pipes-in-interpolation.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  //This declaration contains all the Components belonging to this module
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ClassBindComponent,
    StyleBindComponent,
    EventBindingComponent,
    TemplateReferenceVariableComponent,
    TwoWayBindingComponent,
    IfNgIfComponent,
    SwitchNgSwtichComponent,
    ForNgForComponent,
    ComponentInteractionComponent,
    PipesInInterpolationComponent,
    EmployeeListComponent
  ],
  imports: [
    //Forms module is having ngModel that is used for the 2 way binding
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule     
  ],
  //Providers contain all the Classes or dependencies which our components are dependent upon
  // NOTE: Only one single instance of each dependency will be created for this entire module
  // i.e. the SINGLETON DESIGN PATTERN
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
