
# smallforms

A school project to make a basic form system.

Using pocketbase for backend.
Using SvelteKit & Skeleton UI for front end.

*Will* be hosted on netlify (frontend) and pockethost (backend).

## Features
- Creating forms (text only)
- Password protected results (passwords are stored in plain text)
- Answering forms

**Why are passwords stored in plain text?**
- Because this is a prototype and I feel that security is not necessary for a prototype. However, when going in production, security is needed.
- I have defended against basic exploits like XSS (Cross-site scripting) and SQL injection attacks (by validating every input server-side).

## Usage
You create a form `/create`, then it redirects you to the site, copy-paste the link and send it to people, then view the results by putting in the password.

## Setup
Open the command prompt in the folder you extracted this on.
```
npm install
npm run dev
```

And download pocketbase and open the command prompt on the folder you extracted on.
```
pocketbase serve
```

Have fun~

## Screenshots

