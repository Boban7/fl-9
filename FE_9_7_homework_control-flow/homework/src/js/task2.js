const PLAY 							= confirm('Do you want to play a game?');
const POSSIBLE_BASE_ATTEMPT_1 		= 2.5;
const POSSIBLE_BASE_ATTEMPT_2 		= 5;
const POSSIBLE_BASE_ATTEMPT_3 		= 10;
const ONE_TOCOMPARE_WITH_ATTEMPT_1	= 1;
const ONE_TO_RANDOM					= 1;

const GAME = {
	casinoNumber	: 0, 
	userVariant		: 0, 
	from 			: 0,
	to 				: 5,
	attemptLeft 	: 3,
	totalPrize 		: 0,
	possibleCurrent : [
		0, 
		POSSIBLE_BASE_ATTEMPT_1, 
		POSSIBLE_BASE_ATTEMPT_2, 
		POSSIBLE_BASE_ATTEMPT_3
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
		this.casinoNumber 		= 0; 
		this.userVariant 		= 0; 	
		this.to 				*= 2;
		this.startGame( );
	},
	startNewGame	: function( ) {
		this.casinoNumber 		= 0; 
		this.userVariant 		= 0; 
		this.to 				= 5;
		this.totalPrize			= 0;
		this.possibleCurrent = [
			0, 
			POSSIBLE_BASE_ATTEMPT_1, 
			POSSIBLE_BASE_ATTEMPT_2, 
			POSSIBLE_BASE_ATTEMPT_3
		];
		this.startGame( );
				
	},
	nextAttemptChangePossibleCurrent : function( ) {
		this.possibleCurrent = this.possibleCurrent.map( function( item ) {
			if( GAME.possibleCurrent[ ONE_TOCOMPARE_WITH_ATTEMPT_1 ] === POSSIBLE_BASE_ATTEMPT_1 ) {
				return Math.floor( item );
			} else {
				return Math.floor( item * 3 );
			}
		});
	},
	startGame : function( ) {
		this.attemptLeft = 3;
		this.casinoNumber = Math.floor( Math.random( ) * ( this.to + ONE_TO_RANDOM) );
		this.nextAttemptChangePossibleCurrent( );
		for ( let i = 0; i < this.attemptLeft; ) {
			this.userVariant = this.promptGuess( );
			if ( this.userVariant === this.casinoNumber ) {
				this.totalPrize += this.possibleCurrent[ this.attemptLeft ];
				if( confirm( 'Congratulation! \nYour prize is: ' + this.totalPrize + '$ \nDo you want to continue?')) {
					this.startNewRange( );
				}
			} else {
				if ( this.attemptLeft === ONE_TOCOMPARE_WITH_ATTEMPT_1 ) {
					alert( 'Thank you for a game. Your prize is: ' + this.totalPrize + '$');
					if( confirm( 'Do you want to play again?' ) ) {
						this.startNewGame( );
					} 
				}
			}
			this.attemptLeft--;
		}	
	}
} 

if ( !PLAY ) {
	alert('You did not become a millionaire, but can.')
} else { 
	GAME.startGame( );
}
