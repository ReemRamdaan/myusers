import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(myUsers:User[], searchTerm:string): User[] {
    return myUsers.filter((user)=>user.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
