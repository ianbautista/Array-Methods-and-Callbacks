import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let homeTeam2014 = fifaData.filter((record) => {
	if (record.Year == "2014" && record.Stage == "Final") {
		console.log(record["Home Team Name"]);
		console.log(record["Away Team Name"]);
		console.log(record["Home Team Goals"]);
		console.log(record["Away Team Goals"]);
		if (record["Home Team Goals"] > record["Away Team Goals"]) {
			console.log(`Winner is ${record["Home Team Name"]}`);
		} else {
			console.log(`Winner is ${record["Away Team Name"]}`);
		}
	}
});

console.log(homeTeam2014);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array 
of objects with only finals data */

function getFinals(data) {
	//     /* code here */
	return data.filter((record) => record.Stage === "Final");
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function 
`getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, data) {
	/* code here */
	let years = callback(data).map((record) => record.Year);
	return years;
}

console.log(getYears(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function 
`getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all 
winning countries in an array called `winners` */

function getWinners(callback, data) {
	/* code here */
	// let = []
	let winners = callback(data).map((record) => {
		if (record["Home Team Goals"] > record["Away Team Goals"]) {
			return record["Home Team Name"];
		} else {
			return record["Away Team Name"];
		}
	});
	return winners;
}
console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following 
parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2, callback3, data) {
	const record = [];
	const winners = callback1(callback3, data);
	const years = callback2(callback3, data);
	for (let i = 0; i < years.length; i++) {
		record.push(`In ${years[i]}, ${winners[i]} won the world cup!`);
	}
	return record;
}
console.log(getWinnersByYear(getWinners, getYears, getFinals, fifaData));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns 
the the average number of home team goals and away team goals scored per match 
(Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
	/* code here */
	const homeGoals =
		data.reduce((total, record) => total + record["Home Team Goals"], 0) / data.length;
	const awayGoals =
		data.reduce((total, record) => total + record["Away Team Goals"], 0) / data.length;
	return `${Math.round(homeGoals)} is the average number of Home Team Goals. ${Math.round(
		awayGoals,
	)} is the average number of Away Team Goals.`;
}
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and 
`team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins(data, teamInitials) {
// 	/* code here */
// 	data.filter(
// 		(record) =>
// 			record["Home Team Initials"] == teamInitials || record["Away Team Initials"] == teamInitials,
// 	);
// 	if (this.record["Home Team Goals"] > record["Away Team Goals"]) {
// 		return record["Home Team Name"];
// 	} else {
// 		return record["Away Team Name"];
// 	}
// }

// getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the 
team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
	/* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates 
the team with the most goals scored against them per appearance (average goals against) in the World 
Cup finals */

function badDefense(/* code here */) {
	/* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as 
listed in the README file. */

/* Create a function that takes country initials as a parameter and returns their total number of 
World Cup appearances. */

function getCountryAppearances(teamInitials, data) {
	/* code here */
	let appearances = data.filter(
		(record) =>
			record["Home Team Initials"] == teamInitials || record["Away Team Initials"] == teamInitials,
	);
	return `${teamInitials} made a total of ${appearances.length} appearances.`;
}

console.log(getCountryAppearances("MEX", fifaData));
