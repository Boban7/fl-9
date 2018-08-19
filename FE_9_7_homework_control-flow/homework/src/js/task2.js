const PLAY 						= confirm('Do you want to play a game?');
const possibleBaseAttempt1 		= 2.5;
const possibleBaseAttempt2 		= 5;
const possibleBaseAttempt3 		= 10;
const oneToCompareWithAttempt1	= 1;
const oneToRandom				= 1;

const GAME = {
	x				: 0, //DELETE later
	y				: 0, //DELETE later		
	from 			: 0,
	to 				: 5,
	attemptLeft 	: 3,
	totalPrize 		: 0,
	possibleCurrent : [
						0, 
						possibleBaseAttempt1, 
						possibleBaseAttempt2, 
						possibleBaseAttempt3
	],
	guessMessage	: function( ) {
        return 'Enter number from ' + this.from + ' to ' + this.to + 
			'\nAttempts left: ' + this.attemptLeft + '\nTotal prize: ' + this.totalPrize +
			'\nPossible on current attempt: ' + this.possibleCurrent[this.attemptLeft];
	},
	promptGuess		: function( ) {
		return Number( prompt( this.guessMessage( ) ) );
	},
	startNewRange	: function( ) {
		this.x 					= 0; //DELETE later
		this.y 					= 0; //DELETE later		
		this.to 				*= 2;
	},
	startNewGame	: function( ) {
		this.x 					= 0; //DELETE later
		this.y 					= 0; //DELETE later		
		this.to 				= 5;
		this.possibleCurrent = [
						0, 
						possibleBaseAttempt1, 
						possibleBaseAttempt2, 
						possibleBaseAttempt3
		]
	},
	nextAttemptChangePossibleCurrent : function( ) {
		this.possibleCurrent = this.possibleCurrent.map( function( item ) {
			if( GAME.possibleCurrent[ oneToCompareWithAttempt1 ] === possibleBaseAttempt1 ) {
				return Math.floor( item );
			} else {
				return Math.floor( item * 3 );
			}
		});
	},
	//DELETE later
	cons : function( ) {
			console.log( 'x: ' + this.x + '\n' + 'y: ' + this.y + '\n' + this.guessMessage( ) );
	}
} 

if ( !PLAY ) {
	alert('You did not become a millionaire, but can.')
} else { 
	startGame( );
}

function startGame( ) {
	GAME.attemptLeft = 3;
	GAME.x = Math.floor( Math.random( ) * ( GAME.to + oneToRandom) );
	GAME.nextAttemptChangePossibleCurrent( );
	for ( let i = 0; i < GAME.attemptLeft; ) {
		GAME.cons( );		//DELETE later	
		GAME.y = GAME.promptGuess( );
		if ( GAME.y === GAME.x ) {
			GAME.totalPrize += GAME.possibleCurrent[ GAME.attemptLeft ];
			if( confirm( 'Congratulation! \nYour prize is: ' + GAME.totalPrize + '$ \nDo you want to continue?')) {
				GAME.startNewRange( );
				startGame( );
			}
		} else {
			if ( GAME.attemptLeft === oneToCompareWithAttempt1 ) {
				alert( 'Thank you for a game. Your prize is: ' + GAME.totalPrize + '$');
				if( confirm( 'Do you want to play again?' ) ) {
					GAME.startNewGame( );
					startGame( );
				} 
			}
		}
		GAME.attemptLeft--;
	}	
}


/*Task #2. Guessing game
Your task is to write a game. 

Requirements:
Step 1:
	Create a prompt window (use confirm()). Show the message inside the window 
‘Do you want to play a game?’
	In case the user clicks the 'Cancel' button, the message 'You did not become 
a millionaire, but can.' should be shown (use alert).
Step 2:
	If user clicked ‘Ok’ – start a game: randomly (use Math.random()) choose a 
number in range [0; 5], and ask user to enter a number. (use prompt())
	User has 3 attempts to guess a number
	If user guessed number on 1-st attempt prize is 10$ (maximum prize for current 
numbers range), 2-nd attempt – 5$, 3-rd attempt – 2$. 
	If user did not guess a number show the message ‘Thank you for a game. Your 
prize is: …’ (Use alert), and ask if he wants to play again (use confirm).
Step 3:
	If user did guess - Show the message ‘Congratulation!   Your prize is: … 
Do you want to continue?’
	If user does not want to continue – show the message ‘Thank you for a game. 
Your prize is: …’ (Use alert), and ask if he wants to play again (use confirm).
	If user does want to continue, make number range twice as big as the previous 
one /* for example [0; 5] -> [0; 10] *//*, and three times bigger maximum prize /* 
for example on 1-st attempt prize will be 30$, 2-nd attempt – 15$, 3-rd attempt – 7$ */
	/*. Prize must be added to the previous one and number of attempts should be set to 3 
	user should have 3 attempts to guess a number for each numbers range)
	Each time you ask user to enter a number you should show him a range of numbers, 
how much attempts he has left, his total prize and possible prize on current attempt. 
See example below:
 
Figure 1 – The prompt window

	All these stuffs should be repeated until user lose or decide to quit
*/