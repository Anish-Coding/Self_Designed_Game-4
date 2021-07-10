* A Button to start the game ✔
* When game starts - 
	* He/She would be able to see the other players.✔
	* The seeker would be highlighted with red color.✔
	* The seeker would have a program in which he follows the hider.✔
	* The hider has to run away from the seeker.✔
	* If seeker cathches the hider then hider is trapped. He can only escape if other hider helps him.✔
	* If the hider escapes from the seeker till 20 seconds he will win.

1). Players in the game - 

Hider1(PC) - The main player can move with arrow keys.(Highlighted with purple)✔

Hider2(NPC) - It has code which tries to escape and move away from seeker.✔
Hider3(NPC) - It has code which tries to escape and move away from seeker.✔
Hider4(NPC) - It has code which tries to escape and move away from seeker.✔
Hider5(NPC) - It has code which tries to escape and move away from seeker.✔

Seeker(NPC) - It has code to catch the hiders.

2). A Button to start the game -✔
* GameState changes from START to PLAY.✔
* The seeker has code to follow the hider.
* The hider(PC) has to run away from the seeker.✔
* If the hider escapes from the seeker till 20 seconds he will win✔
* If seeker is touching the hider then hider is trapped.✔

3).GameState changes to END.		
* If seeker catches the hider then hider is trapped.✔
* There will be a total of 5 cage objects with the cage image.✔
* The cage object will be invisible initially, and its x and y positions will be set as the respective object's x and y.✔
* The cage appears (becomes visible) on the hider who is caught.✔
* Now in gameState end, cage1 will be visible on hider1 and all object's movements will be stopped.✔
* Then there will be a restart option.✔
* //Feedback: add sound for end state
* //Adaptivity: lives = 2
& life1 : ✔ seeker setVelocity (X,Y) =(3,3)✔
& life2 : ✔ seeker setVelocity (X,Y) =(5,5)✔
& MODIFY THE CODE WITH THE DRY PRINCIPLE
-REDUCE LINES OF CODE IF IT IS GOING TO BE REWRITTEN IN LEVEL 2 ✔
...

* If you click on that it restarts the game again. ✔
* add bounce off for the seeker ✔

* Things to be done - 
* Hiders and seekers start moving only when the start button is pressed. ✔
* Hiders and seekers
* Score - If the gold coin is collected then score is 1. ✔
 		  If the gold bar is collected then score is 10. ✔
		  The coins and gold bars are in fixed places. ✔
* Collision property for the objects so they don't go inside each other. NO NEED




ADJUST WALLS AND EDGES FOR WIDTH AND HEIGHT ✔
createSprite(width-70, height/2, 20, 20) ✔
upload images for arrow sprites ✔