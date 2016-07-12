//  This document contains the script code belongs to analog clock application
var G_ANGLE_OF_SECONDS_HAND_TO_BE_ROTATE, 
	G_ANGLE_OF_MINUTES_HAND_TO_BE_ROTATE, 
	G_ANGLE_OF_HOURS_HAND_TO_BE_ROTATE;

/*  Make hands to rotate in their respetive angles by using css 
	transform property. */
function rotateHand(handName, angleToRotate) {
	document.getElementById(handName).style.transform = "rotate(" + 
	angleToRotate + "deg)";
}


/*  Get current time from the system, converting them to angles and set the 
	hands to their respective angles. */
function currentTime() {
	var getDate, // Holds date value
		getHour, // Holds hour value
		getMinute, // Holds minute value
		getSecond; // Holds seconds value
	getDate = new Date();	// Get date from system
	getHour = getDate.getHours();	// Get hours from date object
	getMinute = getDate.getMinutes();	// Get minutes from date object
	getSecond = getDate.getSeconds();	// Get seconds from date object

/*  While calculating angle, the 0 degree is at 6 as per code. So adding 180 
	degrees means the angle will be calculated from 12, for understanding purpose. 
    Below logic is for making the hands to be in exact position with respective
    of current time of the system. In below comments, the h,m and n values are 
    the number of hours, minutes and seconds of the time of the system when we 
    call currentTime function, which will be called when every time we open 
    index.html, that is because of onload attribute of the <body> tag */

/*  For one second, the seconds hand rotates 6 degrees. For n, (n*6) degrees. */
	G_ANGLE_OF_SECONDS_HAND_TO_BE_ROTATE = (getSecond * 6) + 180; 

/*  For one minute, the minutes hand rotates 6 degrees. For m minutes it 
    roates (m*6) degrees. And it also rotates (n*0.1) degrees for n seconds. */
	G_ANGLE_OF_MINUTES_HAND_TO_BE_ROTATE = (getMinute * 6) + (getSecond * 0.1) + 180;

/*	For one hour, the hours hand rotates 30 degrees. For h hours it rotates 
	(h*30) degrees. And it also rotates (m*0.5) degrees for m minutes and 
	(n*0.008333) degrees for n seconds. */
	G_ANGLE_OF_HOURS_HAND_TO_BE_ROTATE = ((getHour * 30) + (getMinute * 0.5) + 
								   (getSecond * 0.008333)) + 180;

/*	Calling rotateHand function for every hand to set the hands as per above 
	three calculations respectively. */
	rotateHand("secondsHand", G_ANGLE_OF_SECONDS_HAND_TO_BE_ROTATE);
	rotateHand("minutesHand", G_ANGLE_OF_MINUTES_HAND_TO_BE_ROTATE);
	rotateHand("hoursHand",	G_ANGLE_OF_HOURS_HAND_TO_BE_ROTATE);
}


/*  Set time interval for every second, set hands to their respective angles. */
setInterval (function () {

/*	Add 6 degrees to the angle of seconds hand for every second, 0.1 degrees
	for minute hand and 0.008333 degrees for hour hand. */
	G_ANGLE_OF_SECONDS_HAND_TO_BE_ROTATE = G_ANGLE_OF_SECONDS_HAND_TO_BE_ROTATE + 6;
	G_ANGLE_OF_MINUTES_HAND_TO_BE_ROTATE = G_ANGLE_OF_MINUTES_HAND_TO_BE_ROTATE + 0.1;
 	G_ANGLE_OF_HOURS_HAND_TO_BE_ROTATE = G_ANGLE_OF_HOURS_HAND_TO_BE_ROTATE + 0.008333;

/*	Calling rotateHand function for every hand to set the hands as per the above 
	three calculations respectively. */
	rotateHand("secondsHand", G_ANGLE_OF_SECONDS_HAND_TO_BE_ROTATE);
 	rotateHand("minutesHand", G_ANGLE_OF_MINUTES_HAND_TO_BE_ROTATE);
 	rotateHand("hoursHand",	G_ANGLE_OF_HOURS_HAND_TO_BE_ROTATE);
}, 1000);