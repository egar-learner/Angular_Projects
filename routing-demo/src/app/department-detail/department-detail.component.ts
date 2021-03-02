import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail works!
      <span>The currently selected department id is {{_id}}</span>
      <p>
        <button (click)="showOverview()">Overview</button>
        <button (click)="showContact()">Contact</button>
      
      <router-outlet></router-outlet>
      <br/>
      <a (click) = "goPrevious()">Previous </a>
      <a (click) = "goNext()">Next </a>
      <a (click) = "backButton()">back</a>
    </p>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  
  public _id!: number;

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.activatedRouter});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.activatedRouter});
  }

  goPrevious(){
    let previousId = this._id -1;
    //this.router.navigate(['/department', previousId]);
    this.router.navigate(['../'], {relativeTo:this.activatedRouter});
    //this.router.navigate([previousId], {relativeTo:this.activatedRouter});
  }

  goNext(){
    let nextId = this._id +1;
    this.router.navigate(['/departments-list', nextId]);
  }

  backButton(){
    let deptId = this._id;
    //Here we are passing an extra parameter to save that from which department Id this is coming from in the
    //departmentLists page
    //http://localhost:4200/departments;id=3
    //As shown above it comes as an optional parameter in the URL they are optional and does not have any effect
    //to the view
    
    //We can specify any number of optional parameters
    //this.router.navigate(['/departments', {id:deptId,test:'testVal'}]);
    this.router.navigate(['../', {id:deptId,test:'testVal'}], {relativeTo: this.activatedRouter});
  }

  constructor( private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //In the snapshot approach to get the id the view doesn't gets refreshed as the content of the page doesn't changes
    //And since the view of the page is not changing, there is no change seen on the page by user, Only URL changes
    // ALso since the view is not updating the ngOnInit method is also not called.
    //let id = parseInt(this.activatedRouter.snapshot.params.id);
    //this._id = id;

    //Here, In this method we are subscribing to the param map observable
    //So that any time the param map changes as we have subscribed to it this method ngOnInit() is called and 
    //the page gets refreshed with latest values in the view
    this.activatedRouter.paramMap.subscribe((params: ParamMap) =>{

      //NOTE VERY IMPORTANT
      //It tells TypeScript that even though something looks like it could be null, it can trust you that it's not:
      //let name1:string = person.name!; 
//                                    ^ note the exclamation mark here  
      //Argument of type 'string | null' is not assignable to parameter of type 'string'.
      //Type 'null' is not assignable to type 'string'.
      let id = parseInt(params.get('id')!);
        this._id = id;
    })
  }

}
