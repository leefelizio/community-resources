# Community Resources: LGBTQIA+ on Swizerland

## I. WHY CREATING SUCH WEB APP 

THE GOAL

**To connect resource providers** such as health providers like psychologists, psychiatrists, endocrinologists, and also other resource providers like associations, organisations, support groups and community places **with the community that need their resources**.

The structure of this web app can be used for any kind of community that has their content spread all over the internet, without having a clear place where to find their main resources all together in one place.

For this project in particular I am going to focus on the LGBTQIA+ community in Switzerland. A community that I am part of. After four years living in Switzerland only today I feel that I have the resources that I need from the community that I am part of. 

For example, for people like me that need to find a resource such as a psychologist that is safe for a LGBTQIA+ person is very difficult. Not only is the information outdated in many websites, as this information is spread all over the internet. You can find some lists but never all the content together. 

When asking for a safe list of psychologists to Checkpoint Vaud, for example (an organisation that provides resources to the LGBTQIA+ community) they will send you an excel sheet by email. If you ask the same to Checkpoint Zurich, they are going to send you by email another list with psychologists that work in the region of Zurich. 

And, if you want to do an organic search, you can find yet another list and in other formats and different websites around the internet.

The same happens with Geneva Pride website has a section with resources but they are only links to websites, not the resources itself. When I needed a psychologist that is safe to work with me, a member of the LGBTQIA+ community, not only I had to collect different lists that came from different places but also deal with the lack of availability for the very few psychologists that work with LGBTQIA+ community. It took a year since I started to collect information about safe psychologists until I could find one with availability and to actually walk into his workplace.

**This can lead to a feeling of not only loneliness but also of lack of resources and despair.**

**As we know by many media, the LGBTQIA+ community is a minority and many of us struggle to find resources that are safe for us.** 

Since there is a lot of prejudice and violence directed to this community, it is very important to find places that are safe not only within support groups, events and organisations but also in the health system. **All the resources combined in one place can give to the community a sense that there are many safe resources and people that you can connect to continue your journey.**

It doesn’t happen only for me, but also with many other members of the community. It is a common issue. To find the health providers and yet other kinds of resources and then to find availability between them. Or even to find events that put the community together around the whole country. It is very difficult to find all the information in one place. Many websites provide loose links to information that are far away or even you need to contact by email and then get information by email. By having all the information in one place, the time of collecting and finally waiting to access a resource will be significantly reduced.

So in this project, the idea is that selected resource providers will be able to Login in this Web App and to insert directly their resources into this web app.
I am going to select which resource providers will have the right to login and to insert content in the future since I personally know many of them, and I am also part of an LGBTQIA+ association, so I am part of the community and also a resource provider.

But for this first version of the project or POC, I am going to enter the content by myself, since I have already collected enough content for a start through many years of research. 
The main goal of this project is to connect the resource providers of the LGBTQIA+ community with the community itself by displaying the information that this community needs to survive all in one place.

**The LGBTQIA+ community finally have a place where to find not only fun information about events but the most critical kind of information to be found around the internet: Health providers and organisations, support groups that are safe for a LGBTQIA+ community**.

The fact that the community can find very important information for their survival also can enable the community to feel and to know that they do have a support system and that they are not alone.

Thinking about that, I created some starter categories of resources with professionals, organisations and materials that are safe for LGBTQIA+ community, such as:

- Health Professionals
-- Psychologist / Psychiatrist 
-- Endocrinologist
-- Gynaecologist
-- Urologist
-- Surgeon
- Support groups
- Online resources
-- Informative Material
-- Online Support
- Associations
- Community places
- Events

The content can be inserted initially in any of those categories.

---

## III. HOW TO MAKE IT HAPPEN - Project flow and planning
A **TWO WEEK** SPRINT COMPOSED OF THE FOLLOWING TASKS


### **FIRST WEEK**

PROJECT SETUP
- Install NPM
- Install React
- Install Tailwind
- Config basic styling structure
- Install Vite
- Install Firebase
- Config Firebase
- Create project in git
- Commit changes on Git
- Get orientation of professor to validate rest of the project

DATABASE AND DATA INSERTION
- Create a new Cloud Firestore NoSQL document database
- Create collection “Resources”
- Create fields on Cloud Firestore NoSQL document database
- Place code for Firebase config
- Data insertion forms
- Test data insertion output
- Commit changes on Git

CREATE PAGES AND NAVIGATION
- Create pages
- Home (Searcher)
- Login  (Link to Google Authentication)
- Insert Content (formulary to insert content)
- Install React DOM for navigation
- Create Menu with pages
- Homepage page
- Online Resources page
- Contact page
- Login - It is not a page, but a link to connect with Google Authentication
- Insert Content page
- Create React Router DOM configuration
- Commit changes on Git

CREATE SEARCHER
- Create searcher for home
- Make searcher work for the inserted content
- Make searcher search inside a selected category (if it is very very easy, otherwise in the end of the project)
- Commit changes on Git

GOOGLE AUTHENTICATION
- Deal with details of what was done in the week
- Put Google Authentication in place
- Place conditional: If user is logged, user sees “Insert Content” and “Logout” page on menu (form page)
- Commit changes on Git



### **SECOND WEEK**

DATA INSERTION
- Insert around 20 to 30  lines of data in different categories based on excel sheets and lists that I have collected along the years
- Update ReadMe
- Create a robots.txt no follow
- Commit changes on Git

STYLING
- Create simple design
- Make everything responsive
- Test responsiveness
- Polish design
- Insert css around files into css main file
- Config favicon
- Remove Bootstrap
- Commit changes on Git

DEBUG FUNCTIONALITIES AND STYLING
- Debug all the pages
- Check Accessibility
- Check SEO markup
- Polish functionalities 
- Commit changes on Git

FINAL POLISHING AND PROJECT UPLOAD
- Apply final styling
- Organise and comment code
- Upload project by FTP on my server 
- Commit final changes on Git
- Polish presentation

PROJECT PRESENTATION
Present project

---

## IV.  HOW TO MAKE IT HAPPEN - TECHNOLOGIES USED

The project will be implemented with the technologies that I learned on the Javascript course, except for Tailwind that is a styling of my preference:
- React and Javascript for development
- Cloud Firestore NoSQL document database for content storage
- NPM as the packager manager
- Tailwind for responsive styling

### To create this project I installed:

- NPM `npm i`
- React `npx create-react-app`
- React Router Dom `npm i react-router-dom`
- Tailwind `npm install -D tailwindcss` and `npx tailwindcss init` and followed [Tailwind instructions](https://tailwindcss.com/docs/guides/create-react-app)
- Vite `npm create vite@latest`
- Firebase `npm i firebase`

----

### Screenshots

### MOBILE

##### Search results
<img width="425" alt="mobile--search-results" src="https://github.com/leefelizio/community-resources/assets/153447494/021900be-8a82-4026-b500-48401961d19d">

##### Single resource
<img width="430" alt="mobile--single-resource" src="https://github.com/leefelizio/community-resources/assets/153447494/4909584f-6856-40c9-970f-7ed7c152f5d8">

##### Menu Open
<img width="422" alt="mobile--menu-open" src="https://github.com/leefelizio/community-resources/assets/153447494/8a520bb2-0849-473c-901b-c003664b9422">


----

### DESKTOP

##### Search results - searching by title - design option B
<img width="1580" alt="search-results-design-2" src="https://github.com/leefelizio/community-resources/assets/153447494/117b4ab6-48c1-4835-91ce-530d5a2f1197">

##### Search results - searching by city - design option A
<img width="1503" alt="search-results" src="https://github.com/leefelizio/community-resources/assets/153447494/18384701-537a-4bb0-ba0f-a89bbee95127">

##### Single resource
<img width="1475" alt="single-resource" src="https://github.com/leefelizio/community-resources/assets/153447494/e7117a9d-59a0-4c88-97fc-9672cc5fbd3b">

##### Category page
<img width="1502" alt="category-page" src="https://github.com/leefelizio/community-resources/assets/153447494/f33db9c2-2c18-4653-b2a5-cc7c0170136c">

