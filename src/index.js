import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
    render() {
        return <h1>Hello World!</h1>;
    }
}

ReactDOM.render(<Test />, document.getElementById("root"));


run().then((result) => console.log());

async function run() {
    const SDK = window.datSDK;
    const { Hyperdrive } = await SDK();
    const archive = Hyperdrive("./first-drive", { persist: false });
    await archive.ready();

    const url = `dat://${archive.key.toString('hex')}`;
    console.log(`Here's your URL: ${url}`);

    archive.writeFile('/hello.txt', 'world', function (err) {
        if (err) throw err
        archive.readdir('/', function (err, list) {
            if (err) throw err
            console.log(list) // prints ['hello.txt']
            archive.readFile('/hello.txt', 'utf-8', function (err, data) {
                if (err) throw err
                console.log(data) // prints 'world'
            })
        })
    })



};
