// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components Routing
import { ConfigurationRoutingModule } from 'app/entities/configuration/configuration.routing.module';
import { TestComponent } from 'app/entities/configuration/test.component';

// Display the tooltip, Added the NgbModel from bootsrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ConfigurationRoutingModule,
        NgbModule.forRoot(),
    ],
    declarations: [
        TestComponent
    ],
    providers: [],
    exports: [NgbModule]
})
export class ConfigurationModule {}
