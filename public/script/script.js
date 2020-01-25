let fileNumber;

  function setFile1(){
    if (typeof(Storage) !== "undefined") {
     // Retrieve
        localStorage.setItem("fileNumber", "1");
        fileNumber = localStorage.getItem("fileNumber");
        console.log("File " + fileNumber + " selected.");
      } else {
        console.log("Sorry, your browser does not support Web Storage...");
      };
      window.location='game';
      document.html.style.backgroundColor = "black";
      return fileNumber;
    };

    function setFile2(){
      if (typeof(Storage) !== "undefined") {
       // Retrieve
          localStorage.setItem("fileNumber", "2");
          fileNumber = localStorage.getItem("fileNumber");
          console.log("File " + fileNumber + " selected.");
        } else {
          console.log("Sorry, your browser does not support Web Storage...");
        };
        window.location='game';
        document.html.style.backgroundColor = "black";
        return fileNumber;
      };

      function setFile3(){
        if (typeof(Storage) !== "undefined") {
         // Retrieve
            localStorage.setItem("fileNumber", "3");
            fileNumber = localStorage.getItem("fileNumber");
            console.log("File " + fileNumber + " selected.");
          } else {
            console.log("Sorry, your browser does not support Web Storage...");
          };
          window.location='game';
          document.html.style.backgroundColor = "black";
          return fileNumber;
        };

function displayFiles(){
    document.getElementById("filesContainer").style.display = "block";
};

function hideFiles(){
  document.getElementById("filesContainer").style.display = "none";
};