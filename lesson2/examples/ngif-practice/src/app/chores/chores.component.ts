import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher'];
   // chores = [];
   // chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Sharpen pencils'];
   // finishedChores = ['Prune tomato plants', 'Bake bread'];
   finishedChores = ['Prune tomato plants', 'Bake bread', 'Dust', 'Make lunches'];

   // targetImage = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
   targetImage = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/65764036_2383572088371391_1482232766203428864_n.png?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Rte0r0lRsd4AX_wqw-r&_nc_ht=scontent-ort2-2.xx&oh=00_AT8bqqt74IYRcSJ0lZYo9CaEQALs-HyH-80ez9o9FiSPRw&oe=6272A663'


   constructor() { }

   ngOnInit() {
   }

}
