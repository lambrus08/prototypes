# Prototype - HTML Layout Structure, Blocks &amp; Design

Expand your HTML knowledge with better understanding of HTML layout structure, blocks and design. As you work through 
this prototype we will be building out aspects of the portfolio project v1 (Explanation Coming Soon). This prototype 
is based on the information that you obtained through the following resources (<b>If you haven't gone through these 
then please do so now</b>).

- Readings
    - HTML Blocks - <a href="http://www.w3schools.com/html/html_blocks.asp" target="_blank">Link</a>
    - HTML Layout - <a href="http://www.w3schools.com/html/html_layout.asp" target="_blank">Link</a>
    - HTML Lists - <a href="http://www.w3schools.com/html/html_lists.asp" target="_blank">Link</a>
- Presentations
    - 6. HTML Structure Intent and Layout
        - <a href="https://drive.google.com/drive/u/0/folders/0B6mn1BHjNxTgVTVuNzdLMVNYRGs" target="_blank">Slides Link</a>
    - 7. HTML Horizontal Layout &amp; Semantic Elements
        - <a href="https://drive.google.com/drive/u/0/folders/0B6mn1BHjNxTgVTVuNzdLMVNYRGs" target="_blank">Slides Link</a>
        - <a href="https://www.youtube.com/watch?v=0-WRsALktzE" target="_blank">Video Link (covers both)</a>

## Code Setup Details

#####1. Open PHPStorm

#####2. Navigate to prototypes

> Insert this command in the terminal tab

> `cd prototypes` & press enter

> - this changes the directory to the prototypes folder
> - If you get an error with the above command its probably because you are already within the correct directory

#####3. Create a feature grouping (*Create feature branch*)

> Insert & execute these command in the terminal tab individually

> `git checkout master` & press enter
> - The command above switches to the default branch

> `git pull https://github.com/Learning-Fuze/prototypes.git` & press enter
> - The command above downloads the newly posted prototypes and saves them to your local machine

> `git checkout -b html_fundamentals_5`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "html_fundamentals_5" is the branch name.

## Coding Instructions
<img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_fundamentals_5/layouts/portfolio%20layout%201.jpg" width="30%">
<img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_fundamentals_5/layouts/portfolio%20layout%202.jpg" width="30%">
<img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/html_fundamentals_5/layouts/portfolio%20layout%203.jpg" width="30%">

Make a folder for each layout, and inside that make an index.html.  So you should have 
- layout1
    - index.html
    - ?
- layout2
    - index.html
    - ?
- layout3
    - index.html
    - ?

? Represents any additional files required.  

### Feature Set 1 (Layout 1)

> - Using divs, create the **layout 1** above, found above, click <a href="https://drive.google.com/open?id=0B7eOl4joefDuNTNSblF3M3BmaXc" target="_blank">here for a pdf version</a>
  - Give each section an ID for that section
      - header
        - main_content
        - footer
    - main content:
        - Put 3 paragraphs of lorem ipsum in
    - In the header
        - make a menu utilizing ul / li
            - li elements css:  no bullet point
            - li elements css: display type of "inline-block"
            - Menu items should include
                - About Me
                - Skills
                - Experience
                - Contact Me
    - in the footer
        - put a regular ul / li
            - take away the bullet point dot
            - put a phone number (doesn't have to be yours if you don't want to) in one li,
            - put your learningfuze email address in the second li
    - add the following style sheet link to the document:
        - https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css
    - in the footer's ul element, inside the li for the phone number, add the following
        - &lt;i class="fa fa-mobile"&gt;&lt;/i&gt;
    - Put an appropriate icon into the email's li to designate it's role
        - refer to <a href="https://fortawesome.github.io/Font-Awesome/icons/" target="_blank">the font awesome website</a> to find an appropriate icon

### Feature Set 2 (Layout 2) 

> - Using divs, create the **layout 2** found above.  Click here for a pdf version <a href="https://drive.google.com/open?id=0B7eOl4joefDuZ2NLTWtwOURpcWM" target="_blank">here for a pdf version</a>
  - Give each section an ID for that section
        - header
        - main_content
  - main content:
        - Put 4 paragraphs of lorem ipsum in
        - each paragraph should have a title relating to you header menu below:
            - About Me, Skills, etc
            - Inside each title, add an anchor tag. 
            - Inside the anchor tag, give it an ID corresponding to the section, for example #about_me
  - In the header
        - make a menu utilizing ul / li
            - li elements css:  no bullet point
            - li elements css: display type of "inline-block"
            - Menu items should include
                - About Me
                - Skills
                - Experience
                - Contact Me
            - Each menu item should have an anchor tag.  
                - inside the href attribute, put "#[the id of the corresponding element]" inside it.
                - Don't put #[the id of the corresponding element], change it to the appropriate element!
    
### Feature Set 3 (Layout 3) 

> - Using divs, create the **layout 3** found above, click <a href="https://drive.google.com/open?id=0B7eOl4joefDuUGZSUlE0d3RYb3M" target="_blank">here for a pdf version</a>
  - Give each section an ID for that section
      - title
        - left_nav
        - main_content
    - main content:
        - Put 4 paragraphs of lorem ipsum in
        - add a form element after the lorem ipsum
        - add the following h4 tags (we'll get into inputs next week):
            - name 
            - message 
            - email 
            - submit 


## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "html_fundamentals_5 - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin html_fundamentals_5`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature branch/group <b>html_fundamentals_5</b>

##### 4. See if your feature fits with what everyone else was working on (Pull Request)

> ####Step 4.1 Open your prototypes Repo in the browser
> - The link Should follow this format github.com / [your user name] / prototypes

> ####Step 4.2 Click Pull request tab to open the pull request list

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" width="350"/></a>

> ####Step 4.3 Click "New Pull request" button

> <a href="https://github.com/Learning-Fuze/prototypes/blo b/assets/assets/example/2.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/2.jpg?raw=true" width="800" /></a>

> ####Step 4.4 Comparing Changes
> During this step there are a hand full of highlighted things that need to be taken into consideration.

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" width="800" /></a>

>> 1. `base fork: Learning-Fuze/prototypes`
>>   1. For all prototypes this will always remain the same
>> 1. `base: C#_userName`
>>   1. Here you will select the option that matches your username
>>   1. If you can not locate an option that has your username, contact an instructor
>> 1. `head fork: [your_user_name]/prototypes`
>>   1. Here you will select the option that matches your username / prototypes
>>   1. If you can not locate an option that has your username / prototypes, contact an instructor
>> 1. `compare: html_fundamentals_5`
>>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>>   1. This will usually be the same as the name of the prototype
>> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
>> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>html_fundamentals_5 - [you name first & last 
name]</b> already pre populated in the Title field
> 1. <b>Don't assign a user.</b> (An Instructor will select who this gets assigned too)
>   1. Further into the cohort we will have students learn to review pull requests
> 1. Click on "Create pull Request"

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" width="800" /></a>

> ---

##### 5. Collaborate on feedback

> Within the Github.com UI another developer or in this case an instructor will review the Pull Request you made - <b>Is your feature working</b>. Collaboration happens through github UI & the notifications are sent through email when comments are added to pull requests

> - Students should make modifications to there code based on the instructors feedback
> - Instructors will be giving an initial assessment based on the pull request. <b>Any additional collaboration after the instructor has been feedback will be on a requested basis only.</b>

##### 6. Pull Request Closed
> - In the LearningFuze workflow the pull requests are closed to indicate assessment has been given to the student and recorded.
