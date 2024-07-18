import { User } from './user';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchbyuserName'
})
export class SearchbyuserNamePipe implements PipeTransform {

  transform(myUsers:User[], searchTerm:string): User[] {
    return myUsers.filter((user)=>user.username.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
