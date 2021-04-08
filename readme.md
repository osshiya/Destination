# DDWA Assignment 1 - CMS for IMGD

# Resource Library

A PHP-based Content Management System for IMGD Resource Library accessible by
Staffs, Lecturers and Students. The IRL is responsible for the purchasing, installation,
and maintenance of all software for the IMGD students. The IRL also purchases new
software titles, upgrades the existing software, and remove unused software based
on the requirements specified by the Course Management. The IRL holds on to Lists
of Software, Consultancy Projects, Students and Lecturers related to the IMGD
course.

- GitHub
- GitHub Pages
- Amphibistudio

## Design Process

The website is for three different groups of users: Administrator, Staff and Students
from IMGD. The website is mainly used for IMGD course-related information
regarding the software and projects involved with Students and Lecturers. To achieve
the target and for it to be the most ideal way for different users to make use of these
system. Different users will have different extent of abilities and permission to view
information that will be useful for them regarding the roles they are assigned to.

As an Administrator, I will want to have full access to all the information of the staffs
and students as well as the ability to modify and change information.

As a Staff, I will want to have access to all the information of students and
information for the staffs.

As a Student, I will want to have access to information for students only.

Administrators: Can view all the pages and equipped with permission to modify
details. Staff: View all the informative pages but have no permission to modify
information. Students: View pages with information of students only.

- Administrator
    o name: admin
    o password: adminpwd
- Staff
    o name: staff


```
o password: staffpwd
```
- Student
    o name: student
    o password: studentpwd

## Features

- Access to respective pages after keying username and password stored from
    the database.
- Administrator Page: Page with modifiable details.
- Student List: list of students.
- Staff List: list of staffs.
- Notebook Specifications: list of specification for notebooks.
- Software List: list of required software.
- Project List: Project involved in and information.

### Features Left to Implement

- Removing warning message from login

## Technologies Used

- JQuery
    o The project uses **JQuery** to simplify DOM manipulation.
- [HTML]
    o The project uses **HTML** to create formatting.
- PHP
    o The project uses **PHP** to display data from SQL.
- SQL
    o The project uses **SQL** to store and retrieve data.
- [CSS]
    o The project uses **CSS** to modify the components' style.

## Testing

1. Login

```
i. Try to log in from "index" page with wrong details, nothing happened,
site refreshed.
```

```
ii. Try again with correct details. Log in to one of the three sites
depending on the role of the user.
```
2. Access tables

```
i. Tap on any of the buttons after entering one of the three roles' sites,
greyed out buttons are not available to some users depending on their
roles.
ii. Each button will redirect users to different data.
iii. Press on the back button and will be sent back to the previous page
```
3. Log Out

```
i. Tap on log out button, wait for a while and user will return to index
page.
ii. Sign in again with the same detail or users with the same roles to
return to the previous site.
```
## Credits

### Content


### Media


### Acknowledgements

- I received inspiration for this project from DDWA Assignment01 Brief.pdf


