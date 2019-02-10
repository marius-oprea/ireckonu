# ireckonu

## How to run:
npm i

ng s -o

The application use two databases:

- one provided by you at: https://tsh-app.firebaseio.com/events.json

- one created by me at https://ireckonu-62f03.firebaseio.com

You can change between the two databases, by comment/uncomment a single line of code in the file ..src\app\db\db.service.ts

In order for the events to be sorted on TODAY, THIS WEEK and OTHER category, you need to change the dateTime field value accordingly.

## Responsiveness

The app should display a fluid typography across all mobile, tablet and desktop devices, no matter at what resolution.
For desktop resolutions, the layout and html element sizes will be constant betweek 4K and FullHD and will be bigger than other 
typical desktop apps with the same elements.
