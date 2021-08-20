# The_Game

https://kidvalor.github.io/The_Game/

This game is built on a 9x9 540 pixel grid, within this grid there are 81 individual divs that are 60px which start at a index of 0 and end at 80.


The chicken begins at index 76 and to win you must make it to index 4. 


For our obstacles to move and to color the road, logs, and water correctly we set a few classes: 

log-left
log-right
car-left
car-right
c1,c2,c3
l1,l2,l3,l4,l5

We also set a class for the starting block, ending block, and the other grass blocks. 

For chicken, logs, and cars to move we create a switch statement within a function and use the classList property to move chicken, cars, and logs. 

We set a function move everything to combine all the functions for moving cars and logs together, also we set a function for the chicken to move automatically when it is on a log

We set a function for a win and loss state which states if the chicken runs into the car or lands in the water a life is lost, if life reaches 0 the game is over. 
setInterval used to set speed of objects, which increasese per round. 

A removeEventListener is used to stop chicken in case of win or lost. 

Set a function for the timer which resets each round.

A event listener was added to start timer, move objects, and add event listener to call on moveChicken function. 

There was also a few functions added to create a modal to go over instructions and rules. 

Right now my next steps are to add a splash page wish takes the users nickname or player name and add it to the headline of the game. I would also like to add to the design. 

My current difficulties is I need to figure out how to get the round counter to trigger when the chicken reaches the ending block, right now the counter is triggered when the key arrow is pressed. 
