1. Why is it beneficial to separate your routes, models, and database connection into different directories?

Each file has one job, so it's easier to find bugs and change one part without breaking others. 


2. What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?

PUT is meant to replace the whole resource; PATCH is meant to change only certain fields.

3. In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?

It's a good preactice to send back a success message so you know if the action was completed. 