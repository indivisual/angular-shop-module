/* Pipe que filtra las categorías unicas */

import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 

@Pipe({
  name: 'filterUnique',
  pure: false
})

export class FilterPipe implements PipeTransform {

   transform(value: any): any{
        if(value!== undefined && value!== null){
            return _.uniqBy(value, 'category');
        }
        return value;
    }
}