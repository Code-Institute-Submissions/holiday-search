# Dex: Destination Explorer - Code Institute Milestone Project 2
A deployed version of this site can be found [here]()

## Dex: Destination Explorer Travel App
The purpose of this website is to provide users with information about a place they are in, or want to visit. For people who want to pre-plan, this website can give the user information about accommodation options as well as finding places to eat and drink. For sightseeing, they have the option to find local attractions, such as Museums or aquariums.

### UX
Wireframes can be found [here]()

This website was built for people discovering a new area. It is suitable for people on a day trip or coming for a longer stay, as it can provide information for sightseeing in the day and accommodation for the night, as well as where to find places to eat and drink.


As a traveller visiting a new place I want to:
-   Find accommodation to be able to stay for a few nights
-   Find places to eat and drink
-   Locate tourist hotspots to make the most of my days at this new location

###  User Story
-   I am visiting a new city and don’t know what there is to do there
Upon loading the website, I want to easily find a way to search for my desired destination.
    1.  I see the search bar, that tells me to enter a destination
    2. I start to enter my destination, and Google’s autocomplete recognises that I am searching for London
    3. The map loads within the bounds of my search, and I see there is an option to view attractions, so I click on it.
    4. This loads a table of results showing only attractions that are within the area I searched. I am also able to see these same places rendered on a map, which gives me a good geographic understanding of where each place is.
    5. From this, I am able to plan my day and route around the city to see the sights I have found from this website.
    6. I also realise that during my trip I will need to have some lunch, so I click on ‘Bars and Restaurants’.
    7. This changes the results in the list and on the map to show where I can get some food. 
    8. If the business has registered their website with Google, I can also find a link to their website in an info window when I click on my chosen restaurant. From this link, I can book a table.

-   I am someone who is planning a trip abroad and need to find a place to stay
    1. I search for my desired location
    2. I click on the ‘Accommodation’ heading
    3. This then shows me a list of the local hotels in the area I am wanting to stay.
    4. When I click on a hotel from the list, I see where it is placed on the map
    5. I can then click on the link in the info window and book a room from their website.

### UX
#### Strategy:

I am aiming to produce a user-friendly website for people who want to discover a new area of the world

It will be responsive to all devices and browsers


#### Scope:

It will showcase:
-   A list of places from the Google Places API based on a user’s specific location search request
-   A map for the user to visualise and locate each of the place results.
-   Users will be able to:
    1. Search for a location anywhere in the world
    2. View search results in a map and list
    3. Find links to book hotels, restaurants and days out.

#### Structure / Skeleton:

The website will include 1 page, which will have:
-   A search bar, for users to search for a location.
-   A results table to show a list of the results from the search.
-   A map to display the results visually.
-   Headings to filter the different types of place results that the table and map shows.


#### Surface:
Color Scheme:
The colours for the site will include a blue, to symbolise the oceans separating different locations. It will be contrasted by an orange, which represents the sun.

Font Family:
'Work Sans’ (Google Fonts) for the body.
‘Pacifico’ (Google Fonts) for the logo

There will be no images on the site.


#### Features


#### Existing Features
-   The ‘How To Use The Site’ feature instructs the user on how to use the website, just in case it is not 100% clear to them exactly how it should be used.
-   The Search bar allows a user to request any location on the planet and see it on the map.
-   The 3 headings ‘Attractions’, ‘Accommodation’ and ‘Bars & Restaurants’ allow users to filter the results based on which type of place they are looking for.
-   The results list displays whichever place type the user has chosen, which is also focused on the location they searched for.
-   The map renders the results on a Google Map, which allows the user to see the location of the results in the table.
-   Info window if a user clicks on a place listing will show them the street address, and if it is available a rating out of 5 stars and a website link.

#### Features Left to Implement
Ideally, I would make the sound files continue playing while the user is browsing individual pages, rather than stopping and having to restart every time they visit a new page on the website.

#### Technologies Used

**HTML5**

I used HTML5, as it is the base of every website.

**CSS**

I used CSS to style my HTML code, to create a global design scheme, and make the website visually appealing for users.

**JavaScript, jQuery and Google Maps and Places API**

I used the Google Maps and Places API in combination with JavaScript and jQuery to initialise and render a map, as well as dynamically change things, such as div classes when a user interacts with them, so that they see visual changes to the website.

**[Bootstrap](https://getbootstrap.com/)**

I used Bootstrap so I could utilise the grid layout and improve the site’s responsiveness.

**[Font Awesome](https://fontawesome.com/icons?d=gallery)**
I used font awesome to provide me with icons.

### Testing

-   ‘How To Use The Site’:
    1. When the site loads, the list, which is hidden with CSS isn’t visible
    2. When I click or tap on the heading that says ‘How To Use The Site’, the list successfully appears. If I click it again, it disappears. The toggle works as it should.

-   Search bar autocomplete and map
    1. When I search using the search bar I am given feedback as I type of places that match what I have typed. If I click or tap the place I want, then I am successfully shown this place on the map.

-   Results Table
    1. If I click on one of the headings for place type, the results list appears below, and shows results only for the place type that that heading specifies.
    2. If I tap or click on one of those results in the list, then on the map an info window opens to show more info about the place and highlight where it is on the map.

        An interesting thing to note here is that for ‘Bars & Restaurants’ results, often because Hotels also serve food, they come listed as Bars and Restaurants as well as under Accommodation.

-   On smaller screen sizes the headings successfully stack, instead of being on one row as they are on desktop.

-   When tapped or clicked, headings successfully change colours to show which results type is active and being displayed to the user.
Using Google Chrome’s coverage tool, I checked for unused code, however results showed there was nothing redundant on the site.

### Responsiveness
Using the chrome inspector tool, I tested different screen sizes, to see how the different elements would respond at different breakpoints. I am happy that the site works extremely well at all screen sizes. 

A benefit of this type of website is that it didn’t require navigation or images, so using Bootstrap’s grid layout did most of the work for me.

Through Media queries I have been able to adjust font-sizes, but I developed the site using the mobile first method, so my main focus was making it work for a device in the pocket of someone on the move.


**All tests were done individually on Firefox, Chrome, Safari on Mac and iOS, and returned the same results. I have been unable to test Edge and Internet Explorer, or any browsers on PC.**
### Deployment
This site has been deployed on GitHub Pages, and can be viewed [here]()

#### Credits

As commented in the code, the large proportion of the framework for my map came from Google’s documentation on how to use their Places API to find specific place types. A link to that documentation can be found [here](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch)


