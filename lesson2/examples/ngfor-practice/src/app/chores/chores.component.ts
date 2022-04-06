import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks:['Empty dishwasher', 'Start LaunchCode prep work', 'Make dinner']},
      {title: "Today's Chores", tasks:['Laundry', 'Continue LaunchCode prep work', 'Grocery shop']},
      {title: "Tomorrow's Chores", tasks:['Mow lawn', 'Finish LaunchCode prep work', 'Vacuum']},
   ]
   todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
