This project's goal is to help users store their data locally, own their data, help them access it globally and utilizes Hyperdrive

#### Big shout out to the dat/hypercore team ❤❤❤🙌🙌

## Development Guide 🙄🙄

#### Install these npm dependencies 🤭🤭🤭

#####Step 1:

Navigate to the folder and install Ionic and React router:

    cd hyper-cloud
    npm install @ionic/react react-router react-router-dom @types/ react-router @types/react-router-dom

#####Step 2:

Let's initialize Ionic in this project:

    ionic init "hyper-cloud"

#####Step 3:

To enable capacitor in the project:

    ionic integrations enable capacitor

#####Step 4:

A file capacitor.config.json is generated in our project directory. In the file, we need to change the build directory from `"webDir": "www"` to `"webDir": "build"`.

#####Step 5:

Create a build folder OR generate a build using:

    npm run build

#####Step 6:

Now, we can add a platform to our project:

    npx capacitor add android
