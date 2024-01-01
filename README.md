---
theme: gaia
class: lead
marp: true
paginate: true
---

<style>
section {
  background: #faf4eb;
}
</style>

![bg contain](public/bognardev.png)

---

# Introduction 
---

### Tech Stack:

- Front-end: Next.js, Tailwind CSS, Framer Motion, tailwind-prose
- Back-end: Go (Golang)
- Database: Supabase

---

### Objective:
The primary objective of this project was to seamlessly integrate the power of Next.js for a robust and responsive front-end, Tailwind CSS for efficient styling, and Framer Motion for adding delightful motion effects. On the server side, I used the speed and efficiency of the Go programming language, while Supabase served as my dynamic and scalable database and file storage solution.

---
### Key Features:

- Sleek, modern and accesible design thanks to [RealtimeColours](https://www.realtimecolors.com/?colors=e1eae7-000000-bdd0c9-080c0a-b1c8bf&fonts=Poppins-Poppins)


---
![Infrastructure bg contain](./public/infra.png)

---
# Backend
---
## Overview
The backend was programmed using Go and the Gin framework as it uses simple syntax and easy to learn primitives, coming from a express.js background.

It serves the purpose of a "basic" CRUD-API Layer to the database, it does not serve the hmtl and frontend by itselve. 

---
## Core Features Implementation
My backend had the task of being there for all the Project operations and handling authorisation of the user, so that only Authorised user (The admin) can alter project data.

---
#### Auth-Controller
```go
func Login(c *gin.Context)
func Register(c *gin.Context)
func Status(c *gin.Context)
func CurrentUser(c *gin.Context)
```
---
#### Project-Controller
```go
func GetProjects(c *gin.Context)
func CreateProject(c *gin.Context)
func GetProjectByID(c *gin.Context)
func UpdateProject(c *gin.Context)
```
---

#### Middleware
```go
func JwtAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		fmt.Println("jwt middleware")
		err := token.ValidateToken(c)
		if err != nil {
			fmt.Println("Middleware error: ", err)
			c.String(http.StatusUnauthorized, "Unauthorized")
			c.Abort()
			return
		}
		fmt.Println("Authorized")
		c.Next()
	}
}
```
---
#### Public Routes
```go
r.GET("/", controllers.Hey)
r.GET("/api/projects", controllers.GetProjects)
r.GET("/api/projects/:id", controllers.GetProjectByID)
r.POST("/login", controllers.Login)
r.POST("/register", controllers.Register)
```
---
#### Private Routes
```go
private := r.Group("/private")
private.Use(middlewares.JwtAuthMiddleware()) //Private routes protected by middleware
{
	private.GET("/user", controllers.CurrentUser)
	private.GET("/status", controllers.Status)
	private.POST("/createProject", controllers.CreateProject)
	private.POST("/updateProject", controllers.UpdateProject)
}
```

---
## Functionality Level
Because the API is not consumable publicly the error handling is being handled internally and a userfriendly errorhandling is done on the frontend.
In a realife scenario I would ditch the impletation of a seperate database, in favor of a full-stack solution that Next.js offers.

The database uses sqlx for typesafe SQL query to the database.


---
## Issues

Using filestorage and database from Supabase requires connecting to the DB and the Storage seperatly, because I wanted to use SQL strings for the Database.


Before using the backend a user needs to be created in the Supabase Dashboard

---

## Complexity

<!-- - Discuss the complexity of Back-end functionality implemented.
- Evaluate if the Back-end features demonstrate sophistication. -->
The main complexity comes from the authorisation layer it needs to be secure and not expoitable.

---

## Design Considerations

<!-- - Describe the design considerations taken into account during the Back-end implementation.
- Discuss how the components show a good understanding of networking concepts. -->

I chose to use raw SQL to query the data, which helps me being future proof in case I want to migrate the service to a different stack. 

The Backend layer is protected by middleware and uses JWT token instead of cookie storage to autorise users.



---
## Innovative Approaches

Due to go's concurrency it is modern and my portfolio website will be able to handle a lot of requests.

---

## Code Quality
My code follows best practices such as using stucts to Marshal and unMarshal JSON data from requests, I can be confident using the Project sturucture because go handles filling it for me ad will error when a field is missing.

---
The codebase is structured using a fairly standard Filesystem:

- models: Defintion of data and its behavior
- controllers: handling the requests (seperated in ```projects.go``` and ```auth.go```)
- database: establishing Database connections and a supabase storage connection
- and ```main.go``` defining all the routes and the coressponding controllers
  
---
# Database Implementation
---
## Overview
- Briefly introduce the purpose of the database implementation.
- Emphasize the significance of the database component in the overall project.
---

## Core Features Implementation
- Discuss the implementation of core features of the database component.
- Highlight that there are no show-stopping bugs in these core features.

---

## Functionality Level
- Assess the overall functionality level of the database demonstration.
- Discuss how the implemented features demonstrate a good level of technical ability.

---

## Issues
- Identify and discuss any minor, non-critical issues present in the database demonstration.
- Emphasize that these issues do not impede the functioning of the demonstration.

---

## Database Functionality Complexity
- Discuss the complexity of the database functionality implemented.
- Evaluate if the database features demonstrate sophistication.

---

## Design Considerations
- Describe the design considerations taken into account during the database implementation.
- Discuss how the component shows a good understanding of database concepts.

---

## Innovative Approaches
- Discuss any interesting or innovative approaches used in the database implementation.
- Evaluate how the database component implements a very good set of features.

---

## Database Code Quality
- Evaluate the quality of the code in terms of comments and structure.
- Discuss the level of commenting and the overall structure of the database code.

---

# Database Industry Standards

---
## Database Implementation Standards
- Discuss whether the database implementation adheres to industry standards.
- Evaluate the use of either SQL or NoSQL and the reasoning behind the choice.

---

## Demonstration Functionality
- Discuss the level of functionality in the demonstration.
- Emphasize that there are no issues, if any, in the demonstration.

---

# Conclusion
- Summarize the database implementation, sophistication, maintainability, and adherence to industry standards.
- Reflect on the achieved level of database functionality and the impact on the overall project.

---
# Frontend Technical Analysis

---
## Overview


---

## Architecture
Describe the architecture of your frontend application. Discuss how the project is structured and why it's structured that way.

---

## Components
Detail the key components of your frontend. This could include descriptions of important UI components, services, or libraries that you're using.

---

## Code Samples
Provide some code samples from your project that illustrate important concepts or techniques.

---

## Challenges and Solutions
Discuss any significant challenges you encountered during development and how you solved them.

---

## Future Improvements
Discuss any planned improvements or features for the frontend.

---

## Conclusion
Wrap up your documentation with a brief conclusion.

---

## References
List any resources or references used during the development of the frontend.

---
# HCI-Investiagtion
---

## Overview
- HCI investigation is important because it helps to design more intuitive, efficient, and user-friendly interfaces, enhancing user satisfaction and productivity.
- As it is a personal portfolio HCI is of highest importance, useres should be able to navigate and interact with my site seamlessly to find all important information


---

## User Study
- I set up a google form to get valuable feedback on user experience and design
This helped me identify Problems with my design which I had not realised before, especially for different ages and backgrounds


---
## Results
---
#### Age of participants

![Age Graph](./public/ageGraph.png)

---

#### Gender of participants

![gender Graph](./public/genderGraph.png)

---

### Positive Feedback

- Users appreciated the clear design, ease of navigation, and overall interactivity.
- The project descriptions and details were found helpful and clear.
- The availability of both light and dark modes was well-received.

---

### Design Feedback

- Positive remarks about the design, color scheme, and icons.
- Some users suggested adding more images for a visually appealing experience.
- Recommendations for minor adjustments, like adding app names after icons.

---
#### Devices used to access the Website

![devices Graph](./public/devicesGraph.png)





---

### Navigation Feedback

- Generally positive feedback on navigation ease.
- Some users suggested improving the navigation for specific elements, like "Visit project" and "Github repository."

---

### Content Suggestions

- Requests for more personal information, background, and biography.
- Suggestions for featuring different types of projects, including animated and interactive ones.

---

### Contact Ease

- Positive feedback on ease of contacting through the portfolio website.
- Some users suggested monitoring the desktop mode and improving the visibility of social media links.

---

### Mode Preferences

- Preferences varied between light and dark modes, with no clear majority.
![Theme Graph](./public/themeGraph.png)

---

##  Implementation of Solutions

---

## Example 

The comment that made me realise: 
Create individual pages for different categories
Younger people it was easy to navigate older people found it hard tonavigate and didnt even knoew how to use the links to different pages

---

### Before
![Link before improvement w:200 h:100](./public/LinkBefore.png)

---
### After
![After implementation w:200 h:100](./public/LinkAfter.png)

---

## 2nd Fix
User found that the navbar was too small

---
![Small header bg contain](./public/smallHeader.png)

---

![Big header bg contain](./public/bigHeader.png)


---

## Design Considerations
- Desgining the website it was important for me to keep a cohearent look and fee to it, thats why I reached to Tailwind CSS and a modern colour pallet


---
- The Colours are easily adjustable via the ```globals.css``` file, it makes it extenable for futher adjustments if I don't feel like my Website needs a fresh colour sceme

---
# Optimization Investigation
---
