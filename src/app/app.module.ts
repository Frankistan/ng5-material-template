import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarModule } from "ng2-avatar";
import { CustomMaterialModule } from './modules/custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RoutingModule } from './modules/routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OneComponent } from './one/one.component';
import { SidenavHeaderComponent } from './sidenav/sidenav-header/sidenav-header.component';
import { SidenavListComponent } from './sidenav/sidenav-list/sidenav-list.component';
import { TwoComponent } from './two/two.component';


@NgModule({
    declarations: [
        AppComponent,
        OneComponent,
        TwoComponent,
        NavbarComponent,
        SidenavListComponent,
        SidenavHeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule,
        CustomMaterialModule,
        RoutingModule,
        AvatarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
