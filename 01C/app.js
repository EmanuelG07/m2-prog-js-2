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
        
        let isBoolean = true; 
        let stringValue = "Hello, world!";  
        let numericValue = 42;  
    
        
        console.log("Boolean waarde:", isBoolean);
        console.log("String waarde:", stringValue);
        console.log("Numerieke waarde:", numericValue);
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




