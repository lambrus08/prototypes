# JavaScript - Primitive Data Types

This prototype is designed to introduce you to primitive data types in JavaScript, to demonstrate how they are used 
and show how they can be manipulated. Make sure you have reviewed the slides and video before attempting this prototype. (*links below*)

- Presentations
    - JS Primitive Data Types
        - <a href="https://drive.google.com/a/learningfuze.com/file/d/0B7eOl4joefDudmtWS1cwM0FMamc/view" target="_blank">Slides Link</a>
        - <a href="https://www.youtube.com/watch?v=rj7CRTPoNkE" target="_blank">Video Link</a>
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

> `git checkout -b js_primitive_data_types`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "js_primitive_data_types" is the branch name.

## Coding Instructions

### Getting Started

>1. Make an index.html inside the `js_primitive_data_types` folder
2. Create a basic HTML DOM structure
	- DOCTYPE tag
	- HTML tag
	- head tag
	- body tag
3. Add `script` tags between your `head` tags
4. **DO NOT** edit this README file

### Feature Set 1 - Creating Variables

>##### Create three variables inside your script tag
- Create a variable `firstName`, set it equal to your first name
- Create a variable `lastName`, set it equal to your last name
- create a variable `age`, set it equal to your age

### Feature Set 2 - Concatenation &amp; console.log() 

>##### Concatenation
- Create a variable `output1`
	- Using your variables from *Feature Set 1* and concatenation, create a string that resembles the example string 
	below and store it in output1
	- *String Example:* "First name: Marry, Last name: Smith, Age: 57."

>##### console.log()
- Use `console.log()` in your script tag to log out your `output1` variable to the console

### Feature Set 3 - Adding Variables Together

>##### Two more Variables
- Create two more variables 
	- Create a variable `x`, set it equal to any whole number between 1-100
	- Create a variable `y`, set it equal to any DIFFERENT whole number between 1-100

>##### Log out some more info
- Create three more output variables:
	- `output2`
	- `output3`
	- `output4`
- Set your output variables as follows:
- As an example I'll choose x=12 and y=55
	- **output2** = the total of `x` and `y`
		- *Example output:* `67`
	- **output3** = x and y concatenated 
		- *Example output:* `"1255"`
	- **output4** = Text concatenated with the total of `x` and `y`
		- *Example output:* `"The total of x and y is 67"`

## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "js_primitive_data_types - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin js_primitive_data_types`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the 
remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature 
branch/group <b>js_primitive_data_types</b>

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
>> 1. `compare: js_primitive_data_types`
>>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>>   1. This will usually be the same as the name of the prototype
>> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
>> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>js_primitive_data_types - [you name first & last 
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