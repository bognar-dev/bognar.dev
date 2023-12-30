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
# Frontend (HCI-Investiagtion)
---

## Overview
- Briefly introduce the purpose of the HCI investigation.
- Emphasize the significance of Human-Computer Interaction (HCI) techniques in the overall project.

---

## Issues Identification
- Discuss the issues identified during the HCI investigation.
- Mention any show-stopping or major issues missed and the attempt at analysis.
---
## Technique Application
- Discuss the techniques and heuristics used for identifying interface issues.
- Emphasize if these are based on suitable sources like research papers or well-known HCI sources.
---
## Evaluation
- Discuss the correct implementation of evaluation techniques.
- Mention if changes were evaluated after implementation and if remaining issues were identified.

---

## Detail Level
- Assess the level of detail in the HCI investigation.
- Discuss the correct application of heuristics and the demonstration of technical ability.

---

## Minor Issues
- Identify and discuss any minor, non-critical issues present in the evaluation.
- Emphasize that these issues are minimal and do not significantly impact the interface.

---
##  Implementation of Solutions
- Introduce the section on the implementation of solutions.
- Briefly discuss the importance of addressing the identified HCI issues.
---
## Key Approaches
- Outline the key approaches used to address the HCI issues.
- Discuss any innovative or interesting solutions implemented.
---
## Design Considerations
- Discuss the design considerations taken into account during the implementation.
- Explain how the solutions integrate into the overall structure of the front-end.
---
## Understanding of HCI Techniques
- Demonstrate your understanding of HCI techniques in the context of your solutions.
- Discuss how the implemented solutions align with HCI principles.
---
## Code Quality
- Evaluate the quality of your code, considering factors like comments and structure.
- Discuss the level of commenting and the overall structure of your front-end code.

---
# Optimization Investigation
---

## Overview
- Briefly introduce the purpose of the optimization investigation.
- Mention the significance of performance optimization in web development.

---

## Profiling Tools Used
- List and briefly explain the profiling tools used for the investigation.
- Highlight the reasons for selecting these tools.

---

## Issues Identified
- Categorize and discuss the issues identified during the optimization investigation.
- Emphasize any show-stopping bugs or major performance issues that were discovered.

---

## Investigation Detail
- Provide a detailed analysis of potential performance bottlenecks.
- Discuss the results obtained from profiling tools and how they contributed to the investigation.

---

## Technical Ability
- Assess your technical ability in conducting the investigation.
- Mention any challenges faced and overcome during the process.

---

## Summary of Investigation
- Summarize the key findings of the optimization investigation.
- Provide an overview of the critical issues and improvements identified.

---

# Optimization

---
## Overview
- Introduce the section on the implementation of solutions.
- Briefly discuss the importance of addressing the identified issues.

---

## Key Approaches
- Outline the key approaches used to address the issues identified.
- Discuss any innovative or interesting solutions implemented.

---

## Design Considerations
- Discuss the design considerations taken into account during the implementation.
- Explain how the solutions integrate into the overall structure of your portfolio website.

---

## Understanding of Performance
- Demonstrate your understanding of engine/prototype performance in the context of your solutions.
- Discuss any specific optimizations made to improve performance.

---

## Code Quality
- Evaluate the quality of your code, considering factors like comments and structure.
- Discuss the level of commenting and the overall structure of your code.

---
