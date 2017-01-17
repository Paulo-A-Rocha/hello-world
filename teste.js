// Hacks #1-#5 hacked by Padawan JavaScripter Paulo Alexandre de Jesus Lopes Rocha aka Walking Stone, for <Coding Bootcamp> in FUNDão. E-mail: pauloroc.pt@gmail.com

// Hack #1
var hack = "Hack #1";

var nickname = prompt("User nickname?", "insert nickname here");
var ircConnectedMessage = (" has connected to irc.colo-solutions.net");
console.log( nickname + ircConnectedMessage );

//show on console completed task #
console.log(hack + " completed.");
console.log("");

//Hack #2

var hack = "Hack #2";

// To solve this next task, you first have to declare a new variable and assign your new password to it.

var password = prompt(nickname + ", what is your password?","••••••••••");

// Given variables:

var secureLine = false;
var ircChannelJoinedMessage = ', you joined #th3g3ntl3man';
var currentDay = 0;
var taskTwoDuration = 10;
var elliotSentenceTime = 100;
var minimumPasswordSizeForASecureLine = 10;

// If your password size is higher than minimumPasswordSizeForASecureLine, show 'You're now in a secure line.' and set the variable secureLine to true.

if (password.length > minimumPasswordSizeForASecureLine)
{
alert( nickname + ircConnectedMessage );
alert(nickname + ", you're now in a secure line.");
console.log(nickname + ", you're now in a secure line.");
var secureLine = true;
}

//  Otherwise you should show 'You're not in a secure line. FBI might get a hold of you...'.

else
{
 alert( nickname + ircConnectedMessage );
 alert(nickname + ", you're not in a secure line. The FBI might get a hold of you...");
 console.log(nickname + ", you're not in a secure line. The FBI might get a hold of you...");
}


// No matter what, you should also show us that you've joined the channel by printing
// the variable ircChannelJoinedMessage.

alert(nickname + ircChannelJoinedMessage );
console.log(nickname + ircChannelJoinedMessage );

// Increase your currentDay by the value of taskTwoDuration.

var currentDay = currentDay + taskTwoDuration;

// If Elliot hasn't finished serving his time in jail, you should show what's the currentDay and
// how many days are left in his sentence. Otherwise, show the amount of days he spent in jail.

if (currentDay < elliotSentenceTime)
{
console.log("Elliot's current jail time day: " + currentDay);
console.log("Elliot's days left in sentence: " + (elliotSentenceTime - taskTwoDuration));
console.log(hack + " completed.");
}

else
{
console.log("Elliot has spent " + currentDay + " days in jail");
console.log(hack + " completed.");
}
console.log("");

// Hack #3
