import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
export const appRoutes:Routes = [

 {path: 'dropdowndemo', loadChildren: './components/dropdown/dropdowndemo.module#DropdownDemoModule'}];


