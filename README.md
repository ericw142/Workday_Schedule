# Workday_Schedule
Homework Assignment due Wednesday, September 23, 2020 11:59 PM

The goal of this assignment was to create a scheduler application that includes text areas for the user to input their schedule, and save buttons that save that text to local storage so that it remains on a page refresh. The page also dynamically updates the color of each text area depending on time of day. Past text areas are grey, the current one is red, and future text areas are green. 

This was accomplished using the moment.js API. By creating a variable to store moment().hour(), you can get the current hour. Once I had the current hour stored, I then used that to compare to the data-values on each text area in order to update their background colors. I also utilized the data-values in order to save and display the text from specific text areas. 

On a page load, the script.js will first loop through local storage and compare the saved keys to the data-values of the text areas. If there are matches, it will update the text areas with the stored text. Then, it will compare the current hour (saved through moment.js) to the text areas again in order to update background color. Each save button has a click event connected to a function that will save the corresponding text area's value to local storage, again by utilizing the data-value.


![Workday Scheduler](/Assets/images/scheduler.png?raw=true "Workday Scheduler")

Github Repository: https://github.com/ericw142/Workday_Schedule

Github Pages: https://ericw142.github.io/Workday_Schedule/