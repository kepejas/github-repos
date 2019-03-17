# github-repos

 A project to search for github repositories and star / unstar them.

---

### To start

Find a file  ``
src/config.js
``   and define and insert your github token:

``
export const token = 'your token here'
``  
    
    
Make your token has `repo` and `user` scopes in order to star or unstar a repo using this app. 

then run in your console
``
npm run start
``
to start a project.


#### Tests
``
npm run test
`` to run project tests


### More information

Project is made with ``create-react-app`` and has some npm task within. 
Running ``npm run eject`` will permanently remove all `create-react-app` configurations from this project.

How to create a token:
https://github.com/settings/tokens

