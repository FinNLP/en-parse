const parser = require('./dist/index.js').parse;
const chalk = require('chalk');

const testSample = [
	// `while I was reading my book, john came to the room`,
	// `The man, knowing it was late, hurried home.`,
	// `Why, I can't believe this!`,
	//`If you are not sure about this, let me know now.`,
	//`If we already know which Freddy is meant, the description is not essential.`,
	//`After eighty years of dreaming, the elderly man realized it was time to finally revisit the land of his youth — Ireland.`,
	`That is my money, not yours.`,
	`He walked all the way home, and he shut the door.`,
	`He thought quickly but still did not answer correctly.`,
	`Having finally arrived in town, we went shopping.`,
	`Red bell peppers, for example, have a lot of vitamin C.`,
	`for example, Red bell peppers have a lot of vitamin C.`,
	`Green leafy vegetables, for example, spinach, contain calcium.`,
	`Calcium is in green leafy vegetables, for example, broccoli, kale, arugula, and spinach.`,
	`Red bell peppers, for instace, have a lot of vitamin C.`,
	`for instace, Red bell peppers have a lot of vitamin C.`,
	`Green leafy vegetables, for instace, spinach, contain calcium.`,
	`Calcium is in green leafy vegetables, for instace, broccoli, kale, arugula, and spinach.`,
	`The Tahitian’s ambition, to become an ice skater, is unexpected`,
	`That book, a song of ice and fire, is actually very interesting read`,
	`Fellow students, the ones who were in his school, came down the stairs to help him`,
	`Guys, We've exceeded the highest score!`,
	`Alex, John, Maurice and David are responsible for it.`,
	`In 1931, 1934, 1937 and finally 1940 there were occasional out spreads of the disease`,
	`I use Sublime for PHP, Brackets for HTML, VSCODE for typescript and C9 for anything linux specific`,
	`Their effort to regain the lead successful, the team continued to score until they pulled ahead by a wide margin.`,
	`Her dog, a bull mastiff, looks ridiculous with a pink bow stuck to her head`,
	`He is a strong, healthy man.`,
	`His favorite hobby, knitting, is rather unusual for a man`,
	`Having been lied to before, I was wary`,
	`You, knowing what you now know, are in a better position to judge.`,
	`When the sun went down, I hurried back.`,
	`The development team describes the frameworks as "just javascript".`,
	`I heard the other guy saying "Don't do it"`,
	`"The seed is strong" John Arryn said before dying.`,
	`As per the new reports, the commissioner commented: "Non of the MSNBC numbers will actually have any effect on us"`,
	`Vitamin C is found in colorful vegetables: bell peppers, purple kale, tomatoes. `,
	`Cruciferous vegetables, Brassicaceae, are good for one's health.`,
	`Cruciferous vegetables (e.g., cauliflower, cabbage, cress, bok choy, broccoli) have anti-cancer properties.`,
	`My estate goes to my husband, son, daughter-in-law, and nephew.`,
	`We had coffee, cheese, crackers and grapes.`,
	`We stayed at an expensive summer resort.`,
	`Last Sunday, evening classes were canceled.`,
	`Between your house on Main Street and my house on Grand Avenue, the mayor's mansion stands proudly.`,
	`Jill, who is my sister, shut the door.`,
	`My best friend, Joe, arrived.`,
	`The three items, a book, a pen, and paper were on the table.`,
	`Freddy, who has a limp, was in an auto accident.`,
	`The boy who has a limp was in an auto accident.`,
	`We do not know which boy is meant without further description; therefore, no commas are used.`,
	`No, you can't have a dollar.`,
	`I am, by the way, very nervous about this.`,
	`Will you, Aisha, do that assignment for me?`,
	`Yes, old friend, I will.`,
	`Good day, Captain.`,
	`It was in the Sun's June 5, 2003, edition.`,
	`He said, "I don't care."`,
	`"Why," I asked, "don't you care?"`,
	`He said "Stop."`,
	`"I don't care," he said.`,
	`"Stop," he said.`,
	`Is "I don't care" all you can say to me?`,
	`Saying "Stop the car" was a mistake.`,
	`"Will you still be my friend?" she asked.`,
	`I can go, can't I?`,
	`You may be required to bring many items, e.g., sleeping bags, pans, and warm clothing.`,
	`Sleeping bags, pans, warm clothing, etc.. are in the tent.`,
	`I bought a ton of fruit; apples, grapes, and pears were all on sale`,
	`I went to the grocery store today; I bought a ton of fruit`,
	`We covered many of the fundamentals in our writing class: grammar, punctuation, style, and voice.`,
	`My roommate gave me the things I needed most: companionship and quiet.`,
	`Shakespeare said it best: “To thine own self be true.”`,
	`Life is like a puzzle: half the fun is in trying to work it out.`,
	`Everything I saw in my new neighborhood — from the graceful elm trees to the stately brick buildings — reminded me of my alma mater.`,
	`The students — they were each over the age of eighteen — lined up in the streets to vote for the presidential candidates.`,
	`Books, paper, pencils — many students lacked even the simplest tools for learning in nineteenth-century America.`,
	`To improve their health, Americans should critically examine the foods that they eat — fast food, fatty fried foods, junk food, and sugary snacks.`,
	`Even the simplest tasks — washing, dressing, and going to work — were nearly impossible after I broke my leg.`,
	`“I don’t care what you were thinking,” Rodolpho interrupted.`,
];

var target = testSample[0];

const Lexed = require('lexed').Lexed;
Lexed.extend.english();

var tokens = new Lexed(target).lexer().tokens[0].tokens;

const Tag = require("en-pos").Tag;
var tags = new Tag(tokens).initial().smooth().tags;

var data = parser(tags,tokens);

return;

console.log("Caught coordinates","	",JSON.stringify(data.caughtCrds.map(x=>x.tags[0])));
console.log("----------------------");

for (var i = 0; i < data.subSentences.length; i++) {
	console.log("SUBSENTENCE:","	",i);
	for (var x = 0; x < data.subSentences[i].length; x++) {
		recursiveConsole(data.subSentences[i][x],0,testSample.tokens);
	}
}




function recursiveConsole(node,i,tokens) {
	var pads = chalk.green("	 | ".repeat(i));
	var type = chalk.yellow("Tag/Type: ") + node.tags + "/" + node.type;
	var vtokens = chalk.red("@ Node: ",getTokens(node.index,tokens));
	var label = chalk.yellow("Label: ") + node.label;
	console.log(pads,vtokens);
	console.log(pads,"	",type);
	console.log(pads,"	",label);
	if(node.left.length) console.log(pads,"	",chalk.green("# LEFT NODES"));
	node.left.forEach((node)=>recursiveConsole(node,i+1,tokens));
	if(node.right.length) console.log(pads,"	",chalk.green("# RIGHT NODES"));
	if(node.right.length) node.right.forEach((node)=>recursiveConsole(node,i+1,tokens));
}

function getTokens(indices,tokens){
	return tokens.filter((x,i)=>i>=indices[0]&&i<=indices[1]).join(" ");
}