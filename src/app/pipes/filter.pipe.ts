import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string) {
    

    if(filterString==='')
    {
      return value;
    }

    const emps = [];
    for(const employee of value)
    {
      const dept = employee['department'];
      //console.log(dept['deptName']);
      if(dept['deptName'] === filterString){
        emps.push(employee);
       
      }
    }

    return emps;
  }

}
