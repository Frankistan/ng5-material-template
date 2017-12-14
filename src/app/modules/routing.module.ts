import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './../two/two.component';
import { OneComponent } from './../one/one.component';

const routes: Routes = [
    {
        path: '', pathMatch: 'full', component: OneComponent, data: {
            title: 'Ng5 Material Template',
            animation: {
                value: 'app',
            }
        }
    },
    {
        path: 'one', component: OneComponent, data: {
            title: 'one',
            animation: {
                value: 'one',
            }
        }
    },
    {
        path: 'two', component: TwoComponent, data: {
            title: 'two',
            animation: {
                value: 'two',
            }
        }
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
