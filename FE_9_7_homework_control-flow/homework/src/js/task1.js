let MESSAGE	= ''; 

const USER = new OBJECT_TO_CHECK(
	'User', 
	'Login', 
	'I don’t know you',
	'I don\'t know any users having name length less than 4 symbols'
)

const PASSWORD = new OBJECT_TO_CHECK(
	'SuperUser', 
	'Password', 
	'Wrong password'
)

function OBJECT_TO_CHECK(name, promptWord,  
	defaultMessage, toShortMessage) {
	this.checkName = 				name;
	this.checkPromptWord = 			promptWord;
	this.checkDefaultMessage = 		defaultMessage;
	this.checkToShortMessage = 		toShortMessage;

	this.timeGreeting = function() {
		if(new Date().getHours() < 20) {
			MESSAGE = 'Good day!';
		} else {
			MESSAGE = 'Good evening!';
		}
	}
	this.check = function () {
		const RUN = prompt(this.checkPromptWord);
		switch(RUN) {		
			case null:
			case '': 
				MESSAGE = 'Canceled.'; 
				break;
			case this.checkName:
				if( this.checkName === 'User' ) {
					PASSWORD.check();
					break;
				} 
				this.timeGreeting();
				break;
			default:
				if( RUN.length < 4 ) {
					MESSAGE = this.checkToShortMessage;
					break;
				}
				MESSAGE = this.checkDefaultMessage;
		}
	}
}

USER.check();
alert(MESSAGE);
