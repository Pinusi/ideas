Required
1. Ideas should be displayed as tiles, with a height and width of 150px and a 10px margin, aligned horizontally to fit screen width. You can hard code a few ideas to get you started.
2. There should be a button that can be clicked to add a new blank idea, and the title field should be focused to prompt the user to begin typing. A request should be made to a backend REST service to get an id for the new idea, as well as the created_date.
3. The title and body fields should be editable. These fields should have no border when blurred, but a solid light grey border when they are focused. Blurring any of these fields should trigger an update request to the backend REST service.
4. Each tile should have a delete icon which should only be visible when hovering over the tile. Clicking it should remove the idea and make an update request to the backend REST service.

Stretch
1. Implement sorting that changes with a dropdown. The sort options should be title and created_date.
2. Implement a character counter that is displayed when the body field is edited and the remaining character count is <15. Hide the counter
when the remaining characters count is >15.
3. Use localStorage to persist the ideas so that they persist after a page refresh.
4. Implement a notification to tell the user that edits have been successfully saved. Ensure the notification isn’t intrusive.
