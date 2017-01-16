const parser = require("./lib/index.js");
const parsed = parser(["PRP","VBP","NNP"]);

/**
 *
 * Some sentences to test:
 * 		- I saw a girl.
 * 		- I saw a girl with a telescope.
 * 		- No, it wasn't black Friday.
 * 		- Depending on your needs, choose your text editor.
 * 		- Send the email to Tony please.
 *   	- Correct me if I'm wrong
 *   	- The engineer's apprentice finished the job
 *   	- Something is a thing
 *   	- Something was a thing
 *   	- Something will be a thing
 *   	- Something can be a thing
 *   	- Something could be a thing
 *   	- Something could have been a thing
 *   	- Something was supposed to be a thing
 *   	- Something should have been a thing
 *   	- Something could have been a thing
 *   	- You were supposed to do something
 *   	- You can do something
 *   	- You will do something
 *   	- Will you do something?
 *   	- Will you ever do something?
 *   	- Can you ever do something?
 *   	- I love you
 *   	- I respectfully disagree
 *   	- Please provide your answer.
 *   	- Please do something.
 *   	- Have you ever done something?
 *    	- Longer maturities are thought to indicate declining interest rates.
 *    	- Champagne and dessert followed by some sweet music.
 *    	
**/