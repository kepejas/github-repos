# github-repos

 A project to search for github repositories and star / unstar them.

---

### To start

- Clone this project
- Run `npm install`
- Add your github token to `config.js`
- Run `npm run start`


#### How to insert a token
Find a file  ``
src/config.js
``   and  insert your github token

``
export const token = 'your token here'
``  
      
Make sure your token has `repo` and `user` scopes in order to be able to use this app. 


#### Tests
``
npm run test
`` to run project's unit tests


### More information

Project is made with ``create-react-app`` and has its own npm task included within `package.json`. 
Running ``npm run eject`` will permanently remove all `create-react-app` configurations from this project.
Once this done, it cannot be reverted.

Project is made specifically to use redux/thunks for almost every user action.

How to create a token:
https://github.com/settings/tokens

