function getWtHt() { // KEY: The way it was it dumped immediately on first page not 2nd where needs to be. Added some BR (breaks) to space it out
    document.write("<br/>width=", innerWidth);
    document.write("<br/>height= ", innerHeight);
}

// window.location.href; // KEY: Not sure why this was there

// KEY: Nice to see you trying to use an object for passing the values you wanted.
// KEY: Needed to change how you got title and page address as also need to get from document/DOM
var printInfo = {
    Title: document.title,
    PageAddress: document.URL,
    LastModified: document.lastModified
};
// KEY: Let's just use your object :-)
// function getInfo() {
//     document.write("Title: " , printInfo.Title);
//     document.write("Page Address: ", printInfo.PageAddress);
//     document.write("Last Modified: ", printInfo.LastModified);
// }


//Im confused but hey here's a comment