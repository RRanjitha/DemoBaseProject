import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from 'app/entities/configuration/test.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Configuration'
        },
        children: [
            {
                path: 'test',
                component: TestComponent,
                data: {
                    title: 'Test'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigurationRoutingModule {}
