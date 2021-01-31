import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './courseClass';

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

    courseById: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}
    
    ngOnInit(): void {
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.courseById = course,
            error: err => console.log('Unhadled Service Error', err)
        });
    }

    save(): void {
        this.courseService.save(this.courseById).subscribe({
            next: course => console.log('Curso Salvo com Sucesso', course),
            error: err => console.log('Unhandled Service Error', err) 
        });
    }
    
    back(): void {}
}