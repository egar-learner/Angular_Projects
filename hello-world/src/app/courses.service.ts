
import { Injectable } from '@angular/core';

//To make a service injectable into some component
//i.e. this service might be using/depending upon certain services
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
    getCourses() {
        return ['mkt', 'rahul', 'shanish'];
    }
}