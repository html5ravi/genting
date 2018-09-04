import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class TranslateProvider {

  constructor(public translate:TranslateService) {
    translate.setDefaultLang('en');


    
  }

}
