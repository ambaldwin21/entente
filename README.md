# Entente

The name comes from the French word entente, which means ‘an alliance of parties to such an understanding.’ Entente is an app that connects like-minded users on important social and environmental issues.

**Here's a video walkthrough:** https://www.youtube.com/watch?v=GE0STkVCqM8&t=8s

**Check it out here:** https://q3-entente.herokuapp.com/#/

##Features

1. The home page gives you a brief introduction, and allows you to go to the sign up/log in page. We surveyed about 100 people across the US and abroad about their level of concern for 3 social issues and started our map with this initial data.

![screen shot 2016-12-06 at 12 38 35 pm](https://cloud.githubusercontent.com/assets/18018191/20940777/2e5c5dea-bbb1-11e6-904c-7fc96e87bbb2.png)

2. If you are a first-time user you will sign-up and specify your location using your zip code, and you will then be directed to the issues page where you can choose your preferences.

![screen shot 2016-12-06 at 12 30 24 pm](https://cloud.githubusercontent.com/assets/18018191/20940733/0d5eb39a-bbb1-11e6-95b0-8a20991f7fd7.png)

3. You will then be redirected to your main page where you'll see your preferences displayed, as well as the map, which now includes your data.

4. Each of the 3 social issues has it's own layer on the map. Toggle between viewing just 1, 2 or all 3 layers at once.

![screen shot 2016-12-06 at 12 30 43 pm](https://cloud.githubusercontent.com/assets/18018191/20940755/1b4cc9ba-bbb1-11e6-9872-517b7319b58f.png)

5. View the chat functionality by clicking on the 'CHAT' button at the bottom of the profile view. The chat funcitonality pops up below the map.

**Note:** The socket.io chat currently only works when locally hosting. Support in the Heroku deployment is coming soon. Also, our maps are currently only static. Support for dynamically updating maps is coming soon.

##Technologies

The app uses a Bootstrap framework with Angular and Angular Materials for the slider functionaly. Node, Express.js to query the PostgreSQL database. Maps powered by ESRI/ArcGIS API and chat functionality is Socket.io.
