Address Book | OmniUpdate Test Documentation
------------------------------------------------------------------
Address Book v1.0.1

Frameworks and Libraries Used
------------------------------------------------------------------

	1. Bootstrap v3.3.5
	2. AngularJS v1.3.14


Application Files
 ------------------------------------------------------------------

 	1. /index.html --> HTML5 code for the UI.
 	2. /assets/css/addressBook.css --> CSS code for the User Interface.
 	3. /assets/js/app.js --> AngulasJS code which works with the API and performs required front end tasks.
 	4. /assets/filters/phone-filter.js --> AngulasJS custome filter which reformats the phone number as (nnn) nnn-nnnn in all views.


Requirements Finished
 ------------------------------------------------------------------

	1. Application gets the contacts from the back end and presents them as a list in a table format on the front end. The list displays all the entries while filling out the form in a proper table format created using bootstrap.

	2. Created a boostrap modal box to add a new contact in the list. The modal box can be reached by clicking the "+"" button on the top right corner of the application.

	3. Application supports searching mechanism. It used AngularJS filters to perform the search on the list and presents the appropriate results on the screen. The search is realtime and does not require clicking additional buttons which improves the overall user experience of the application.

	4. Application also supports the sorting mechanism. The sorting mechanism works both in ascending and descending order. The requirement was to provide the sorting solely based on first name, last name and email only; however I went ahead and provided sorting for each and every field in the table. The user just need to click on the table header entry in order to perform the sorting.

	5. Application supports modifying the current entries in the list. It can be done by clicking the pencil icon at the end of every entry.

	6. Application supports deleting the current entries in the list. It can be done by clicking the delete icon at the end of every entry. 

	7. The application validates email addresses and phone numbers against certain patterns. Without the correct pattern, user can not submit the form.

	8. Application reformats the phone number as (nnn) nnn-nnnn in all views. I have worked on a custom AngularJS filter to provide that functionality.



Requirements in Progress
 ------------------------------------------------------------------
	1. Application currently does not support multiple deletion at a same time. That is a feature I am currently working on.
	2. Having some problems in loading the gravatar of the user as per his email address. Having difficulties in solving the problem of appending the hash code of the email as a prefix to the gravatar image link.


--- End of Documentation ---
