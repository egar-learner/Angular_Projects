
//importing the component from angular/core
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';


//A simple decorator that is @Component() to make this plain TS file as a component
//Inside we provide some properties by putting all the properties in a object
@Component({
    selector: 'courses',  // <courses>
    // Ways to use selectors in html
    //1. Custom tag 
    //  selector : 'courses'       By this we can use the selector as a tag    <courses></courses> in our html
    //2. Class 
    //  selector : '.courses'      By this we can use the selector as a <p class="courses"></p> in our html
    //3. Attribute 
    //  selector : '[courses]'     By this we can use the selector as a property <p courses></p> in our html
    template : `
    <h2>{{ count + " Authors"}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course + (courses.indexOf(course)+1)}}              <!-- using this {{ some function call or property call }} is called Interpolation-->
        </li>
    </ul>
    
    ` 
})
export class CoursesComponent {
    private _title='List of Courses';

    private _count!:number;

    private _courses = ['Course1', 'Course2', 'Course3'];

    //The list of courses in most real world cases would be coming from the backend
    // or an API call
    // Logic for calling an HTTP service should not be included in this class as
    // 1. It makes it tightly coupled
    // 2. This class must hold only logic related to presentation layer

    //By passing the services as a parameter we are adding the dependency of Component on CoursesService
    //Dependency Injection
    //Providing dependencies of a class (CoursesSevice) into its constructor is nothing but dependency injection
    constructor(services: CoursesService){
        // let services = new CoursesService();
        // 1. By doing the above we are tightly coupling the CoursesService with the CoursesComponet creates unit testing difficult
        // 2. Hence, in future for any change in the CoursesService constructor we need to do the changes in 100 places where this 
        // new instance is created.

        this.courses = services.getCourses();
    }
    
    get title(){
        return this._title;
    }

    get courses(){
        return this._courses;
    }

    set courses(value:string[]){
        this._courses = value;
    }

    get count(){
        return this.courses.length;
    }

}