We have a simple BookClub database that is maintaining a list of books, who has lent the book, and who has borrowed the book. We can also add new book entries, borrow and return books.

The database looks something like this (The actions column will have buttons appearing conditionally based on the state of the application).

| Id | Book  | Author  | Lender | Borrower | Actions |
| -- | ----- | ------- | ------ | -------- | ------- |
| 1  | Book1 | Author1 | UserC  | UserB    |         |
| 2  | Book2 | Author2 | UserC  | -        |         |
| 3  | Book3 | Author3 | UserD  | UserC    |         |
| 4  | Book4 | Author4 | UserA  | -        |         |
| 5  | Book5 | Author5 | UserA  | -        |         |
| 6  | Book6 | Author6 | UserB  | UserA    |         |

Here is what the completed page looks for the logged out and logged in user

![Screenshot 2022-03-02 at 10 11 28 PM](https://user-images.githubusercontent.com/10229595/156407182-1273780e-fae0-48d3-94d4-84157f7de0a7.png)


![Screenshot 2022-03-02 at 10 11 39 PM](https://user-images.githubusercontent.com/10229595/156407216-46476c81-1205-4271-b618-29ad7042ae9a.png)



For purposes of this exercise, we have provided the basic HTML and CSS styles for you. You only need to write the Javascript code.

The final completed database should have the following functionalities:

1. A table containing the information shown above - in a real world example, this data would be coming in from a database, fetched by backend API’s. For the purposes of this assignment, you can store this data in an appropriate data structure.
2. Logged-in functionality:
    1. If you pass a user name and the user is present in the list - that user will be logged in and their name should appear above the table
    2. If you pass a user name and the user is not present in the list - no user will be logged in and no name should appear on the field
    3. If you pass a blank string - no user will be logged in
3. Add book functionality - 
    1. We should have the ability to add new entries in this table
    2. This functionality will only be shown when a user is logged in
    3. To add a row, enter the name and author of the book and hit the add button in the last column
    4. The name of the lender should be logged in user’s and the borrower should be empty
    5.  After adding a book, another row should appear with a blank book and author and add button.
4. Return action
    1. This button appears on rows where the logged in user is the borrower as “Return”
    2. When no user is logged in, this button does not appear
    3. When clicked, the borrower’s name is removed from the field and it becomes blank, and button changes from "Return" to "Borrow"
5. Borrow action
    1. This button appears on rows where the borrower is blank
    2. When no user is logged in, this button does not appear
    3. When clicked, the borrower column has the logged in user’s name and the “Borrow” button changed to “Return”
