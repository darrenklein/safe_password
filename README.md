# Safe Password
> Chrome extension

Notify users if a password that they've entered in a form is on the list of the 100,000 most commonly used passwords, according to [this list](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10-million-password-list-top-100000.txt).

## To-do

As a proof-of-concept, it works - however, it fails to properly check forms where the password input is not a direct child of the form. Need a more robust method for checking the form data.
