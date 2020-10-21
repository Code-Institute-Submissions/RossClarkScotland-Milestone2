# American Gods: The Road Trip

*American Gods: The Road Trip* is the minimum viable project for a mobile-first web application of what is essentially a fan site,
 with a twist, for the bestselling Neil Gaiman novel *American Gods*. The novel is an urban fantasy in which the protagonist, 
 Shadow, drives from one US town to the next in order to aid his boss, Wednesday / Odin, in rallying the gods of old, pagan, 
 religions for a war against the gods of the new world, the latter being personifications of media, technology, etc. Since the
 publication of the novel, an increasing number of its fans have attempted to recreate the journey that Shadow makes by going on 
 similar road trips in the US. Additionally, more fans have discovered *American Gods* and become interested in recreating the 
 road trip since the novel was adapted into an internationally successful television show and a bestselling graphic novel series.

*American Gods: The Road Trip* will be a must-visit website for any fan of the novel or TV show and anyone either considering or 
currently undertaking a road trip based on either.

The full site is deployed via GitHub Pages at: https://rossclarkscotland.github.io/Milestone2/index.html

## UX

NOTE: A full user experience design document, detailing the five planes of design for *American Gods: The Road Trip* appears 
as a separate document. The UX section in this document provides an overview.

*American Gods: The Road Trip* assists fans both in enriching their experience of the novel / TV show by providing information
about the locations in which the events take place and by helping to plan / make road trips based on the tale by providing route
maps and information on how to find accommodation, eating opportunities, and tourist sights in each town. Additionally, music is
a strong motif that has captured the imagination of many readers of *American Gods*, with Neil Gaiman referencing over 50 songs
throughout the novel. The website affords readers an opportunity to easily access all of these songs.

In its present form, *American Gods: The Road Trip* is designed for a post-COVID 19 world, in which tourism has largely returned to
normality. However, should the current situation persist in the long-term, the site&#39;s &quot;Places&quot; page enables users to
discover the locations in the novel virtually via Google Maps. In a long-term COVID context the site could be modified to focus 
more on a virtual tour, using, for example, the Google Street View Static API or, at a more advanced level, by integrating augmented
reality software, such as that offered by Mapbox ([https://www.mapbox.com/augmented-reality/](https://www.mapbox.com/augmented-reality/)).

**User stories**

User story 1:

&quot;As someone reading *American Gods* right now, I&#39;d love to know more about all the locations in the novel so I can really put
myself in Shadow&#39;s shoes as I read.&quot;

User story 2:

&quot;As a huge fan of *American Gods*, I&#39;ve wanted to make a road trip based on the novel for a long time and I&#39;d really like 
information on how to plan that trip.&quot;

User story 3:

&quot;As someone currently making a road trip based on *American Gods*, I really need information on where to stay and eat, as well as
on what to do, in each place I visit.&quot;

User story 4:

&quot;As a huge fan of *American Gods*, I found the music in the novel really atmospheric and I&#39;d love to listen to it to evoke my 
memories of the book.&quot;

**Features: Existing features**

**All pages**

- The navigation bar allows users to easily navigate the pages of the site by giving them a simple site overview. It also contains a 
hover effect, creating a border around the navigation bar the user is currently hovering over, for further clarity.

- As it provides a cleaner aesthetic on smaller devices, the navigation bar appears on the homepage in the form of a hamburger-style
 dropdown menu. However, all other pages contain navigation links as texts directly on a banner image at the top of the page. 
 This decision was made because both the changing colours between the banner image and the main page and the text atop each page 
 would mean that a burger-style menu would be less aesthetically pleasing on all other pages as it would mix / cut across both colours
and content. The navigation bar directly on the banner image in this case provides a better aesthetic and has the additional benefit
of reducing the number of times users need to click to access information, i.e. by not requiring the user to click a burger menu to
see the navigation bar before selecting another page.

- The minimalist footer allows users to easily access related social media pages without encroaching on other site content. 
The social media icons in the footer turn to green, matching the green of the aurora borealis on the hero image, whenever a user hovers over them.

**Index.html**

- In addition to the navigation bar and social media footer discussed above, index.html contains an atmospheric background road trip image 
from Pixabay that evokes the journey and supernatural elements of the novel.
- Via media queries, the background image, navigation bar, and page title will change orientation, from portrait to landscape, depending 
on the size of the screen.
- As stated above, index.html contains a hamburger-style dropdown navigation bar on smaller devices for a cleaner aesthetic. The homepage 
navigation changes its design arrangement to make best use of the device on which it appears. For example, on laptops, the homepage image 
appears as a landscape image with the title and sub-title in the Lato font and the navigation links appearing in the top-right corner in 
Amatic SC. The same is true of tablets when index.html is viewed in a landscape view with the device held horizontally. However, when 
index.html is viewed as a portrait image on most tablets (i.e. not larger tablets like the iPad Pro), with the device held vertically, 
the homepage utilizes the burger-style menu with the navigation links in the Amatic SC font and the page title and sub-title in Lato. 
For smartphones, the page title appears in Lato, the sub-title in Amatic SC and the navigation links in the burger-style dropdown in Lato, 
given that those links would be less legible when smaller when written in Amatic SC in the the dropdown.

**about.html**

- The About page gives visitors an overview of *American Gods* and the purpose of the site.
- An embedded YouTube video, via iframes, gives visitors an opportunity to obtain more information on the *American Gods* road trip directly 
from Neil Gaiman himself.

**quotes.html**

- A JavaScript function enables users to generate a quote from *American Gods* at random, something which is bound to appeal to book lovers, 
especially fans who are invested in this particular novel enough to visit the site.

**route.html**

- Embedded maps, via Google Maps Route Planner, show users how to get from one road trip location to the next based on the order they 
appear in the *American Gods* novel.
- An internal navigation menu allows users to easily navigate to each route map.
- A &#39;Geography Challenge&#39;, powered by the Google Maps JavaScript API, allows users to place nodes on a map of the US in an attempt
 to correctly identify the locations in the novel.
- Users may manipulate any of the embedded maps, e.g. zooming in and out of particular locations. Users are given brief instructions above each 
map to tell them how to interact with it.
- &#39;Return to top&#39; links return users back to the internal page navigation bar without having to scroll for longer periods.

**places.html**

- This page contains easy-to-access maps and information on accommodation, eateries, and tourist sights for every suggested location on the 
*American Gods* road trip.
- The internal page navigation bar, coded as an unordered list, allows users to quickly jump to any of the 24 locations covered on the page 
by providing an inner-page hyperlink to each.
- Each section contains the relevant location, background information on the role this location plays in *American Gods*, maps, and information 
on accommodation, eateries, and tourist sights in the area. Sections begin with a default map showing accommodation in the area, but users may 
change the content of each map, to show either eateries or tourist sights, by clicking one of 3 call to action buttons below each map.
- Users may click the nodes on each map to access information / ratings on each hotel, restaurant, or tourist site by clicking the nodes.
- The &#39;RETURN TO TOP&#39; links after each location allows users to navigate easily back to the inner-page navigation bar without having 
to scroll for long periods.
- Instructions above each section inform users on how to interact with the maps. These instructions are repeated in each section, i.e. 
rather than simply being stated once at the beginning, to ensure than users receive this information even if they navigate straight 
to a location without reading the introductory page information.

**music.html**

- This page affords users an opportunity to easily access all of the songs referenced in *American Gods* via both a link to an external 
article which lists all of the songs in the novel and a &#39;jukebox&#39; on the page which, with the click of a call to action button, 
will select a song from the book at random. An element of gamification is added by framing this within the narrative that the gods from 
the novel have chosen the song for the user.

**game.html**

- This page allows users to play an old-school card battle-type game on the page, whether to kill time on the road trip or just to enhance 
reader&#39;s enjoyment of the novel by allowing them to play as and against characters in the book.
- The game page enables users to play as one of 4 characters by clicking on a character profile.
- Once users choose a character, they find one of 4 opponents by clicking a button at the bottom of the page.
- During the game, users play by pressing one of 3 call to action buttons: &#39;Attack!&#39;, &#39;Retreat!&#39;, or &#39;Go nuclear!&#39;.
- The narrative and events of the game are communicated to users via window alerts, or, for those whose devices block window alerts a &#39;
Scoreboard&#39; at the top of the page, for which the inner HTML changes to to contain the relevant information after each move. In cases
 where devices do allow window alerts, the inner HTML at the top of the page simply acts as a scoreboard and summary of each round of play.

**contact.html**

- This page allows users to contact the site by filling out a contact form, the content of which will link directly to a valid email address 
used by the site administrator.
- A clearly marked call to action button enables users to send their messages.

## Features: Features left to implement

- An image gallery of photographs taken by site users on their road trips.
- A discussion forum for users to exchange information and advice on travel logistics, where to see, what to do, etc.
- A page which allows users to write reviews of hotels, restaurants, tourist sights, etc.
- A page similar to the current places.html page but which rather uses an API such as Google Street View Static or 
location-based Augmented Reality via Mapbox to enable users to take, albeit limited, virtual tours of specific locations in the novel.
- Develop a social media presence.
- Build a YouTube playlist of all the songs in *American Gods* and link to it / embed it.

## Technologies used

- GitHub: [https://github.com/](https://github.com/)
  - GitHub was used to host the application&#39;s repositories.
- GitPod: [https://www.gitpod.io/](https://www.gitpod.io/)
  - GitPod served as the integrated development environment used to code the site.
- HTML: [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - The website uses HTML to input the structure and content.
- CSS: [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - The website uses CSS to style the HTML elements.
- Bootstrap 4: [https://getbootstrap.com/](https://getbootstrap.com/)
  - The website uses the Bootstrap 4 framework to simplify the integration and styling of responsive elements.
- JavaScript: [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - The site uses JavaScript to enable interactive user events and to incorporate features from the following APIs: Google Maps JavaScript API, Google Maps Embed API, Formspark.
- Google Maps JavaScript API: [https://developers.google.com/maps/documentation/javascript/overview](https://developers.google.com/maps/documentation/javascript/overview)
    - The route.html page uses the Google Maps JavaScript API to power a &#39;Geography Challenge&#39;, which allows users to place 
nodes on a map of the US in an attempt to correctly identify the locations in the novel.
- Google Maps Route Planner: [https://www.google.de/maps?ie=UTF8&amp;hl=de&amp;daddr=Wegelerstrasse+6,+Bonn&amp;f=d&amp;om=1](https://www.google.de/maps?ie=UTF8&amp;hl=de&amp;daddr=Wegelerstrasse+6,+Bonn&amp;f=d&amp;om=1)
  - The route.html page contains embedded maps showing possible routes from one road trip destination to the next:
- Google Maps Embed API: [https://developers.google.com/maps/documentation/embed/get-started](https://developers.google.com/maps/documentation/embed/get-started)
  - The places.html page uses the Google Maps JavaScript API to provide users with maps and further information on accommodation, eateries, and tourist sights in each 
  of the towns on the *American Gods* road trip.
- Formspark: [https://formspark.io/](https://formspark.io/)
  - Formspark was use to link the contact form on contact.html to a functioning email account.
- Google Fonts: [https://fonts.google.com/](https://fonts.google.com/)
  - The site uses Google Fonts to integrate the Lato and Amatic SC fonts into the website.
- Fontawesome: [https://fontawesome.com/](https://fontawesome.com/)
  - The site uses Font Awesome to integrate social media icons into the footer.
- Autoprefixer CSS online: [https://autoprefixer.github.io/](https://autoprefixer.github.io/)
  - Autoprefixer was used to automatically add vendor prefixes to style.css in order to aid cross-browser compatability.
- word2md.com: https://word2md.com/
   - To ensure correct markdown in the first draft of this Read Me file a Microsoft Word document of the text was run through word2md.com.
   The resulting markdown and text was then edited according to the preferences of the author using rules set out in the
   *Mastering Markdown* document at GitHub.com.
   [https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/)

## Testing

To ensure that the site contains valid HTML, the HTML code was checked by direct input using the W3C Markup Validation Service: [https://validator.w3.org/](https://validator.w3.org/)

To check valid CSS, direct input via the W3C CSS Validation Service was used: [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)

To test the validity of the JavaScript used in each of the JavaScript files JShint was used: [https://jshint.com/](https://jshint.com/)

To ensure the site&#39;s functionality across various devices, I used the web developer tools inspection feature of each of the following browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Opera

I manually checked all the pages and features of the website (i.e. navigation, links external and internal, buttons, hover effects, 
embedded video, maps, game, contact form) across all device simulations that each browser offers.

In addition to checking the application&#39;s functionality using browser developer tools, the site has been manually checked and 
found to function as desired on the following devices:

- Laptops:
  - Lenovo Yoga 530 (checked by both myself and my wife, Anita):
  - HP 255 G5 Notebook (checked by both myself and my wife, Anita):
  - Macbook with Safari 13 (checked by my friend Yan)
- Tablets:
  - Kindle Fire 3 HD (checked by both myself and my wife, Anita)
  - iPad mini 3 (checked by my father, George)
- Smartphones:
  - Samsung Galaxy J4+ (checked by myself)
  - Samsung A50 (checked by my wife, Anita)
  - iPhone XR (checked by my brother, Greg)
  - iPhone SE (checked by my friend Ruth)
  - Samsung S7 (checked by my friend Mike)

## How the site meets user needs

User story 1:

&quot;As someone reading *American Gods* right now, I&#39;d love to know more about all the atmospheric locations in the novel
so I can really put myself in Shadow&#39;s shoes as I read.&quot;

How the site meets this need:

- The site provides maps of locations in the novel which allow users to visualize each area and discover what each town contains.

User story 2:

&quot;As a huge fan of *American Gods*, I&#39;ve wanted to make a road trip based on the novel for a long time and I&#39;d 
really like information on how to plan that trip.&quot;

How the site meets this need:

- The site provides route planning for locations in the novel, which enables potential road trippers to plot out their trips.

User story 3:

&quot;As someone making a road trip based on *American Gods*, I really need information on where to stay and eat, as well 
as on what to do, in each place I visit.&quot;

How the site meets this need:

- The places.html page contains maps from the Google Maps Embed API and allows users to easily navigate to find accommodation, 
activities, and places to eat in each location from the novel&#39;s 
road trip.

User story 4:

&quot;As a huge fan of *American Gods*, I found the music in the novel really atmospheric and I&#39;d love to listen to it 
to evoke my memories of the book.&quot;

How the site meets this need:

- The music.html page contains a &#39;jukebox&#39; which allows users to randomly select a YouTube video from a list of 
all the songs referenced in *American Gods*. The page also contains a link to an article which lists all of the songs individually.

## Requirements: Content

To meet the needs required above, the website requires mixed multimedia content including: text, photographs, interactive maps,
 hyperlinks, embedded YouTube videos, site-wide navigation buttons, internal page navigation buttons, and &#39;return to top of 
 page&#39; navigation links.

## Deployment

I deployed *American Gods: The Road Trip* to GitHub Pages. To do so, I opened the project repository on GitHub, opened the Settings,
and scrolled down to the GitHub Pages section. To build the site,I selected the Master Branch option from the drop down menu of sources.
 GitHub then published _American Gods: The Road Trip_ to GitHub Pages.

To run the code for *American Gods: The Road Trip* locally, one may:

1. Open the main page of the repository at:[https://github.com/RossClarkScotland/Milestone2](https://github.com/RossClarkScotland/Milestone2)

1. Click the green &quot;Code&quot; button.

1. Click the clipboard icon to copy the project URL.

1. Open a terminal in GitPod, or other Integrated Development Environment.

1. Open the file you wish to clone to.

1. Enter the following command into the terminal:

$ git clone [https://github.com/RossClarkScotland/Milestone2](https://github.com/RossClarkScotland/Milestone-Project-Literary-Edinburgh)

Further details are available via: [https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

## Credits

**Content:**

- The linear-gradient method used on the landing page image was based on the design and code used for the CSS project on the following Udemy course 
(though the image and linear gradient values themselves differ from those on that course): [https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/)
- The social media link icons code in the footer was adapted from that in the Bootstrap mini project of the User Centric Frontend Development module.
- The code for the &quot;Return to the top of the page&quot; buttons was taken, and slightly adapted, from that given on the following web page: [https://www.computerhope.com/issues/ch001475.htm#:~:text=In%20your%20HTML%20code%2C%20find%20the%20opening%20%3Cbody%3E,you%20back%20to%20the%20top%20of%20the%20page](https://www.computerhope.com/issues/ch001475.htm#:~:text=In%20your%20HTML%20code%2C%20find%20the%20opening%20%3Cbody%3E,you%20back%20to%20the%20top%20of%20the%20page)
- I created the game by adapting from and adding to a game built in the following tutorial: [https://www.youtube.com/watch?v=M6sA8fvMCuA&amp;t=1s](https://www.youtube.com/watch?v=M6sA8fvMCuA&amp;t=1s)
  - NOTE: An in-depth breakdown on the rationale for the game and how the version appearing in *American Gods: The Road Trip* differs from that given
   in the tutorial appears in a separate document.

**Media:**

- The image index.html background image comes from Pixabay.com. The same image is used as the banner image at the top of each page.
- The quotes in quotes.html come from Gaiman, N.2011. *American Gods: The 10th Anniversary Edition*. HarperAudio.
- The video embedded in about.html is hosted on YouTube.
- I collated the songs for the jukebox in music.html using the following article: [https://www.tor.com/2017/04/27/every-song-mentioned-in-neil-gaimans-american-gods-plus-a-few-bonus-tracks/](https://www.tor.com/2017/04/27/every-song-mentioned-in-neil-gaimans-american-gods-plus-a-few-bonus-tracks/)
- All images in game.html were taken from [https://americangods.fandom.com/wiki/American\_Gods\_Wiki](https://americangods.fandom.com/wiki/American_Gods_Wiki). 
N.B. these images, and this website as a whole, are used only for educational purposes and no copyright infringement is intended.

## Acknowledgements:

I would like to thank my wife, Anita, for not complaining when I bored her to tears talking about this project, for proof-reading site content,
for double-checking functionality across various devices, and, most of all, for inexplicably agreeing to remain in my general vicinity.

I also owe a debt to my brother, Greg, for repeatedly agreeing to test and give feedback on site functionality, 
particularly as regards the various iterations of the game.

I am indebted, too, to my friends Ruth, Yan, and Mike, and to my father, George, for checking the functionality of the website on their devices.

I would also like to thank my friend Milana for offering her expert feedback on all things cartographic and design, and for being a reliable 
font of telling me when my UX and design suck.

Finally, I would like to express my gratitude to my course mentor, Spencer Barribal, for offering encouragement and useful ideas, and to the 
Code Institute tutors and Slack community for providing advice and for humouring me when I asked stupid questions.