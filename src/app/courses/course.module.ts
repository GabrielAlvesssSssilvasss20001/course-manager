import { NgModule } from "@angular/core";

import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { StarComponent } from './../star/star.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { ReplacePipe } from './../pipe/replace.pipe';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        StarComponent,
        ReplacePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})

export class CourseModule {

}