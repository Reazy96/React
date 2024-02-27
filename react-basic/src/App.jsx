// 1. npm create vite@latest
// 2. y -> eintippen um weiter zu machen
// 3. project-name erstellen
// 4. react auswählen
// 5. js auswählen
// 6. cs <projectname> = navigiert in unserem react project rein
// 7. npm install = installiert alle pakete die für react benötigt werden
// 8. npm run dev = startet das project

// node_modules = dort befinden sich alle projekte die für react benötigt werden (können auch welche installieren)
// public = dort werden alle datieen gespeichert die unverändert ausgegeben werden (bilder, fonts)
// src = hier werden wir 99% unserer zeit verbringen. hier programmieren wir. in der regel erstellen wir in der src ordner , 2 ordner mit "pages"& "components"
// .gitignore = hier schrioeben wir alles rein was nicht in github hochgeladen werden soll
// index.html = ist der startpunkt von unserer app. in unserem div mit der id "root" , wird alles rein gerendert
// package- lock.json= hier befinden sich alle benötigten npm pakete inkl. version.
// package.json= hier befinden sich infos über unsere app (name, version etc.)
// README.md= hier kommen infos rein , wie z.b eine kleine beschriebung zum projekt /app.
// vite.config.js= hier können wir vite anpassen
// - jsx = javascript syntax extension

// app.css cs. index.css:
//  in die index.css kommen alle generelle stylings wie (font-family)
//  in die app.css machen wir nur die stylings für die page app.jsx

import "./App.css";
import Home from "./page/Home/Home";

function App() {
  return <Home />;
}

export default App;
