import { Component ,Input} from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent {
 @Input() friendList=[new Person("Vishal","Buxar",2344556)
  ,new Person("Vickey","Patna",2234443),
  new Person("Ankit","Ara",234443),
  new Person("Rahul","Delhi",333455)

]
}
