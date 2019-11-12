# Safe Password
> Chrome extension

Notify users if a password that they've entered in a form is on the list of the [100,000 most commonly used passwords](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10-million-password-list-top-100000.txt).

## To-do

How many password scenarios is it necessary to chase down? The current code will find passwords nested at any depth in a form, but it won't work in a situation where a password is submitted by a click POST event that's not not actually a form submission (Google, and Microsoft, seemingly - or at least no submit event is emitted).
