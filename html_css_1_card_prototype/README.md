# HTML CSS 1 Card Prototype

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

> `git checkout -b html_css_1_card_prototype`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "html_css_1_card_prototype" is the branch name.

## Coding Instructions
For our examples, we will use the following urls for images.  You can change them if you wish.
- back image:
	- cardback-rankedladder.png
- front image: 
	- afp-cute-puppy.jpg

### Feature Set 1 (Layout 1)
#### Create a single card with simple animation
> - Create a file, fs1.html, put the items for Feature Set 1 within it.
- Create a container element that will hold all cards.  A good class name would be 'game_area'
	- should fill all available space, vertically and horizontally
- Create a single card container that will hold the front and back faces of a card.  
	- should fill enough space horizontally so that, with maximum available space, 6 cards fit on a single line.  Please note that the card container only holds one of those cards
- Create a card front face and card back face within that container.  
	- There are many ways you can do this.  Find a way that works best for you.
	- The front card face should display the "front image" from above.
	- The back card face should display the "back image" from above.
	- Both the back and front should be one on top of the other
	- The "back image" face should be visible, hiding the "front image" face.
	- The "back image" face should completely overlap the "front image" face.
- Add hover functionality via CSS:
	- On hover of the card container
	- cause the back face to disappear.  Don't worry about animation, this will be for the next feature set.

<img src="https://github.com/Learning-Fuze/prototypes/blob/html_css_1_card_prototype/html_css_1_card_prototype/helper_images/side_by_side.png">

### Feature Set 2 (Layout 2) 
#### Create a single card with rotate animation
> - Create a file, fs2.html, and put the requisite code in it to satisfy Feature Set 2
- Use the layout / structure you created for Feature Set 1 and duplicate it in fs2.html
- Alter the CSS hover effect so that, on hover, the card appears to rotate, revealing the "front image" face, hiding the "back image" face
- hints:
	- you probably will need to preemptively flip one of the faces, like you would expect to arrange two sides of a piece of paper
	- perspective can be helpful
	- don't forget about duration
	- For added fidelity, make sure each face is rotating in a way that looks realistic
	- If you don't specific, the back side, or "backface" of an image will be visible unless you hide it.

    
### Feature Set 3 (Layout 3) 

> - Create a file, fs3.html, to contain the version for this prototype
- Copy your code from fs2.html
- Duplicate your card container such that your cards are side by side, with an appropriate spacing between them if desired.
	- At max, should be 6 cards wide by 3 cards high.
	- Should be somewhat responsive to resizing.
	- All cards should be hover functional still, without animations spilling over to other cards inadvertently 

<img src="https://github.com/Learning-Fuze/prototypes/blob/html_css_1_card_prototype/html_css_1_card_prototype/helper_images/all_cards.png">

## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "html_css_1_card_prototype - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin html_css_1_card_prototype`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature 
branch/group <b>html_css_1_card_prototype</b>

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
>> 1. `compare: html_css_1_card_prototype`
>>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>>   1. This will usually be the same as the name of the prototype
>> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
>> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>html_css_1_card_prototype - [you name first & last 
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
