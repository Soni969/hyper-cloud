import React from "react";
import { IonApp, IonButton, IonPage } from "@ionic/react";

const App = () => {
  return (
    <IonApp>
      <IonPage>
        <IonButton
          onClick={() => {
            run().then((result) => console.log(result));
          }}
        > Create Hyper-Drive
        </IonButton>
      </IonPage>
    </IonApp>
  );
};

async function run() {
    const SDK = window.datSDK;
    const { Hyperdrive } = await SDK();
    const archive = Hyperdrive("./first-drive", { persist: false });
    await archive.ready();

    const url = `hyper://${archive.key.toString("hex")}`;
    console.log(`Here's your URL: ${url}`);

    archive.writeFile("/hello.txt", "world", function (err) {
        if (err) throw err;
        archive.readdir("/", function (err, list) {
            if (err) throw err;
            console.log(list); // prints ['hello.txt']
            archive.readFile("/hello.txt", "utf-8", function (err, data) {
                if (err) throw err;
                console.log(data); // prints 'world'
            });
        });
    });
}

export default App;
