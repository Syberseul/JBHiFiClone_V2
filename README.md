# <p align="center"> <a href="https://linkedin-clone-yiteng.web.app/"> LinkedIn Clone </a>(Official Website: https://www.linkedin.com)
  
## Table of Contents
- <a href="#about"> About the Project </a>
  - <a href="#built-with"> Build With </a>
  - <a href="#feature"> Feature </a>
- <a href="#getting-started"> Getting Started </a>
  - <a href="#prerequisites"> Prerequisites </a>
  - <a href="#requiredConfig"> Required Config </a>
  - <a href="#installation"> Installation </a>
- <a href="#demo"> Demo </a>
- <a href="#contact"> Contact </a>
  
## <a id="about"> About the Project </a>
  A Clone version of LinkedIn (layout and feed post) developed with React-Redux, firebase hosting

- <a id="built-with"> Built with: </a>
  - <a href="https://react-redux.js/org/"> React-Redux </a>
  - <a href="https://firebase.google.com/"> Firebase </a>

- <a id="feature"> Features: </a>
  - [x] Applied Firebase Authentication that allow users to create/login via email account
  - [x] Redux applied to store logged in user information
  - [x] Setup firebase hosting the application
  - [x] Connect with firebase database that allow users post feed and others can see
  
## <a id="getting-started"> Getting Started: </a>
  
### <a id="prerequisites"> Prerequisites: </a>
This section is about tips to help you play with this demo on your own device 🐱
 1. (Optional) Enter `npm install npm@latest -g` in your vsCode terminal to install latest npm globally
 2. (Optional) Enter `npm -v` in your vsCode terminal and make sure it gives the version of your npm
  
### <a id="requiredConfig"> Required Config: </a>
  1. Go to <a href="https://firebase.google.com/"> Firebase </a> and login (or create) account
  2. Go to console (top-right corner) and `Add project` to create your project whici will host this demo
  3. Get and save <b> Firebase config </b> from project setting (left banner) `SDK setup and configuration` and choose `Config`

### <a href="installation"> Installation: </a>
  1. Clone the repo to your local device `https://github.com/Syberseul/LinkedIn-clone.git`
  2. Install required dependencies `npm install`
  3. Create `.env` file at the root of the folder, and enter config which get previously in `Required Config` section:
  ```
  REACT_APP_FIREBASE_API_KEY = FIREBASE_API_KEY goes here
  REACT_APP_AUTH_DOMAIN = FIREBASE_AUTH_DOMAIN goes here
  REACT_APP_PROJECT_ID = FIREBASE_PROJECT_ID goes here
  REACT_APP_STORAGE_BUCKET = FIREBASE_STORAGE_BUCKET goes here
  REACT_APP_MESSAGING_SENDER_ID = FIREBASE_MESSAGING_SENDER_ID goes here
  REACT_APP_APP_ID = FIREBASE_APP_ID goes here
  ```
  
## <a id="demo"> Demo: </a>
  - Login and Create Account:
  
https://user-images.githubusercontent.com/32564367/130381120-a3408aae-063b-4865-9b48-adc6097581c8.mp4

  
  - Post feed and stored in firebase database:
  
https://user-images.githubusercontent.com/32564367/130381138-c3c888df-83a7-4d5a-9154-d88935202f7d.mp4


  - Public access of feeds to all users:
  
https://user-images.githubusercontent.com/32564367/130381199-0826b7f2-d2d7-44c0-9137-96c58f343ff7.mp4

  
## <a id="contact"> Contact Email: </a>
  yteng.huang@gmail.com
