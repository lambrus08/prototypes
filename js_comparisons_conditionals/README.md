# Javascript - Comparisons and Conditionals

This prototype is designed to build on the knowledge gained from primitive data types and speecial data type prototypes, and introduce you to making comarprisons and conditional statements in JavaScript. Make sure you have reviewed the slides and video before attempting this prototype. (*links below*)

- Presentations
    - JS Comparisons and Conditionals
        - <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDuR2FKZTVvN0lQQ00/view" target="_blank">Slides Link</a>
        - <a href="" target="_blank">Video Coming Soon</a>
- Projects
    - This project will help build towards the Memory Match project, as well as be a foundation for general
    programming knowledge that will be used in all future projects.

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

> `git checkout -b js_comparisons_conditionals`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "js_comparisons_conditionals" is the branch name.

## Coding Instructions

#### Getting Started

>1. Make an index.html inside the `js_comparisons_conditionals` folder
1. Create a basic HTML DOM structure
	- DOCTYPE tag
	- HTML tag
	- head tag
	- body tag
1. Add `script` tags between your `head` tags
1. **DO NOT** edit this README file

### Comparisons

#### Feature Set 1 - Create some variables

>Between your script tags create the following variables

>1. Declare a variable named `mySmallNumber` Set its value to `5`
1. Declare a variable named `myString` Set its value to `"5"`
1. Declare a variable named `myBigNumber` Set its value to `255`

#### Feature Set 2 - Create output

>Create four output variables named:

> - `output1`
- `output2`
- `output3`
- `output4`

>Set the outputs as shown below
<br>
>**Note** - Use actual comparisons to generate the true/false part of the output 
		 - You will need to use concatenation to achieve the proper output
		 - Example: `var output1 = "my string " + (x == z))`

>1. output1 = `"mySmallNumber == myString is true"`
1. output2 = `"mySmallNumber === myString is false"`
1. output3 = `"mySmallNumber < myBigNumber is true"`
1. output4 = `"mySmallNumber > myBigNumber is false"`

>Using four separate `console.log` to log out your four output variables

#### Small challenge (optional)

>Using the two variables `mySmallNumber and myString` from above, create a single variable named `challenge` to hold the following

>Concatenate the two variables together
then Use ` === ` to compare another concatenation of the two variables and set the result to your challenge variable

>Use a `console.log` to log out your `challenge` variable

>What is the result?

>Add a comment in your code with your answer if you dare!

### Conditionals

#### Feature Set 3 - Create some more variables

>1. Declare a variable named `myTruth` Set its value to `true`
1. Declare a variable named `myLie` Set its value to `false`

#### Feature Set 4 - Conditionals

>1. Using the `myTruth` variable write a single if statement that outputs: `"I'm true!"`
1. Using the `myLie` variable create an if/else statement
	- if true output `"I'm true!"`
	- else output `"I'm false!"`
1. Using both variables write an if/else statement
	- Example: if(myTruth == myLie)...
	- if true output `"I'm true!"`
	- else output `"I'm false!"`
1. Using the `myLie` variable create just an if statement that evaluates to `true`
	- **DO NOT** use an else condition
	- Have the output be `"I'm a true lie!"`

#### Feature Set 5 - Switch Statement

>1. Declare a new variable called `myNumber` Set its value equal to a number between 1-100
1. Write a switch statement based on myNumber that has three `case` statements plus a `default`
1. Make it so one of your `case` statements will be true
1. Create a unique `console.log()` for each `case` statement

## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "js_comparisons_conditionals - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin js_comparisons_conditionals`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature 
branch/group <b>js_comparisons_conditionals</b>

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

>  1. `base fork: Learning-Fuze/prototypes`
>    1. For all prototypes this will always remain the same
>  1. `base: C#_userName`
>    1. Here you will select the option that matches your username
>    1. If you can not locate an option that has your username, contact an instructor
>  1. `head fork: [your_user_name]/prototypes`
>    1. Here you will select the option that matches your username / prototypes
>    1. If you can not locate an option that has your username / prototypes, contact an instructor
>  1. `compare: js_comparisons_conditionals`
>    1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>    1. This will usually be the same as the name of the prototype
>  1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>    1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>    1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by 
instructors at start)
>  1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>js_comparisons_conditionals - [you name first & last 
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