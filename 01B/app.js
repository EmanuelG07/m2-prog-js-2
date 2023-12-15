class App
{
    runApplication()
    {
        console.log("hello world!")
        //code gaat hier!
        this.appNaam ="Mijn app";
        this.versienummer =9;
        this.versiedatum =15-12-2023;
        this.autheur ="Emanuel Ghiorghita";
        this.copyright ="Emanuel BV";
        this.darkmode =false;
        this.greeting = "starting up";
    }
}

let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("appNaam: " + app.appNaam);
console.log("Darkmode: "+app.darkmode);
console.log("Versiedatum: "+app.versiedatum);
console.log("Autheur: "+app.autheur);
console.log("Versienummer: "+app.versienummer);
console.log("Copyright: "+app.copyright);




