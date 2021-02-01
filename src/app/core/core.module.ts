import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PageNotFound404Component } from './component/pageNotFound404/pageNotFound404.component';

import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        NavBarComponent,
        PageNotFound404Component
    ],
    imports: [
    RouterModule.forChild([
            {
                path: '**', component: PageNotFound404Component
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})

export class CoreModule {

}