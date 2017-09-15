import {Injectable, ElementRef} from "@angular/core";
@Injectable()
export class DomHandler {
    public static index:number = 1000;

    public addMultipleClasses(element:any,classes:string):void{
        if(element.classlist){

        }
        element.classlist+=classes.split(',');
    }


}
