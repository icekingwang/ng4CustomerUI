import {Injectable, ElementRef} from "@angular/core";
@Injectable()
export class DomHandler {
    public static index:number = 1000;

  public addMultipleClasses(element: any, className: string): void {
    if (element.classList) {
      let styles: string[] = className.split(' ');
      for (let i = 0; i < styles.length; i++) {
        element.classList.add(styles[i]);
      }

    }
    else {
      let styles: string[] = className.split(' ');
      for (let i = 0; i < styles.length; i++) {
        element.className += ' ' + styles[i];
      }
    }
  }

  public findSingle(element:any,selector:string):any{
    return element.querySelector(selector);
  }

}
