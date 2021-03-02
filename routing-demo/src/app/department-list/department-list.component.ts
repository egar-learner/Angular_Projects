import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>

    <ul class="items">
      <button (click) = "onSelect(department)" *ngFor="let department of departments" [class.selected]="isSelected(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </button>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  deptId !: number;

  onSelect(department:any){
    //Using the routing service navigate to navigate to specific page, in this case we are
    //going to the departments/id.
    //The second parameter to the function is the parameter to the path and behaves like departments/id path

    //ALL THE PATHS WHICH ARE STARTING WITH / are ABSOLUTE PATHS
    //this.router.navigate(['/department', department.id])
    //This tells angular to append department.id to the URL , irrespective of what the URL is
    //relativeTo: specifies the current active Routing 
    this.router.navigate([department.id], { relativeTo: this.activeRoute });
  }

  isSelected(department : any){
    return department.id === this.deptId ;
  }

  departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"}
  ]

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activeRoute.paramMap.subscribe((params: ParamMap)=>{
      let dept = parseInt(params.get('id')!);
      this.deptId = dept;
    })
  }

}
