//File number
let fileNumber = localStorage.getItem("fileNumber");
//Determine if intro has already been completed
let intro1 = localStorage.getItem("intro1");
let intro2 = localStorage.getItem("intro2");
let intro3 = localStorage.getItem("intro3");
//Level for each file
let lvl1 = localStorage.getItem("lvlOne");
let lvl2 = localStorage.getItem("lvlTwo");
let lvl3 = localStorage.getItem("lvlThree");
//EXP for each file
let exp1 = localStorage.getItem("expOne");
let exp2 = localStorage.getItem("expTwo");
let exp3 = localStorage.getItem("lvlThree");
//Max HP for each file
let maxHP1 = localStorage.getItem("maxHP1");
let maxHP2 = localStorage.getItem("maxHP2");
let maxHP3 = localStorage.getItem("maxHP3");
//Current HP for each file
let HP1 = localStorage.getItem("HP1");
let HP2 = localStorage.getItem("HP2");
let HP3 = localStorage.getItem("HP3");
//Max MP for each file
let maxMP1 = localStorage.getItem("maxMP1");
let maxMP2 = localStorage.getItem("maxMP2");
let maxMP3 = localStorage.getItem("maxMP3");
//Current MP for each file
let MP1 = localStorage.getItem("MP1");
let MP2 = localStorage.getItem("MP2");
let MP3 = localStorage.getItem("MP3");
//Max SP for each file
let maxSP1 = localStorage.getItem("maxSP1");
let maxSP2 = localStorage.getItem("maxSP2");
let maxSP3 = localStorage.getItem("maxSP3");
//Current SP for each file
let SP1 = localStorage.getItem("SP1");
let SP2 = localStorage.getItem("SP2");
let SP3 = localStorage.getItem("SP3");
//Attack stat for each file
let attack1 = localStorage.getItem("attack1");
let attack2 = localStorage.getItem("attack2");
let attack3 = localStorage.getItem("attack3");
//Defense stat for each file
let defense1 = localStorage.getItem("defense1");
let defense2 = localStorage.getItem("defense2");
let defense3 = localStorage.getItem("defense3");
//Magic stat for each file
let magic1 = localStorage.getItem("magic1");
let magic2 = localStorage.getItem("magic2");
let magic3 = localStorage.getItem("magic3");
//Dexterity stat for each file
let dexterity1 = localStorage.getItem("dexterity1");
let dexterity2 = localStorage.getItem("dexterity2");
let dexterity3 = localStorage.getItem("dexterity3");

console.log("Currently playing file number " + fileNumber + ".");

  function displayFiles(){
    document.getElementById("filesContainer").style.display = "block";
  };

  function hideFiles(){
    document.getElementById("filesContainer").style.display = "none";
  };

  function setFile1(){
    if (typeof(Storage) !== "undefined") {
     // Retrieve
        localStorage.setItem("fileNumber", "1");
        fileNumber = localStorage.getItem("fileNumber");
        console.log("File " + fileNumber + " selected.");

        if (intro1 === null){
          intro1 = false;
        };

        if (intro1 === false){
        window.location='gameIntro';
        }
        else if (intro1 === "true"){
        window.location='game';
        };
      } else {
        console.log("Sorry, your browser does not support Web Storage...");
      };
      return fileNumber;
    };

    function setFile2(){
      if (typeof(Storage) !== "undefined") {
       // Retrieve
       localStorage.setItem("fileNumber", "2");
       fileNumber = localStorage.getItem("fileNumber");
       console.log("File " + fileNumber + " selected.");

       if (intro2 === null){
         intro2 = false;
       };

       if (intro2 === false){
       window.location='gameIntro';
       }
       else if (intro2 === "true"){
       window.location='game';
       };
        } else {
          console.log("Sorry, your browser does not support Web Storage...");
        };
        return fileNumber;
      };

      function setFile3(){
        if (typeof(Storage) !== "undefined") {
         // Retrieve
         localStorage.setItem("fileNumber", "3");
         fileNumber = localStorage.getItem("fileNumber");
         console.log("File " + fileNumber + " selected.");

         if (intro3 === null){
           intro3 = false;
         };
 
         if (intro3 === false){
         window.location='gameIntro';
         }
         else if (intro3 === "true"){
         window.location='game';
         };
          } else {
            console.log("Sorry, your browser does not support Web Storage...");
          };
          return fileNumber;
        };

function startBalanced(){
  fileNumber = localStorage.getItem("fileNumber");
  console.log(fileNumber);
  if (fileNumber === "1"){
  localStorage.setItem("lvlOne", "1");
  localStorage.setItem("expOne", "0");
  localStorage.setItem("maxHP1", "110");
  localStorage.setItem("HP1", "110");
  localStorage.setItem("maxMP1", "110");
  localStorage.setItem("MP1", "110");
  localStorage.setItem("maxSP1", "110");
  localStorage.setItem("SP1", "110");
  localStorage.setItem("attack1", "2");
  localStorage.setItem("defense1", "2");
  localStorage.setItem("magic1", "2");
  localStorage.setItem("dexterity1", "2");
  maxHP1 = localStorage.getItem("maxHP1");
  HP1 = localStorage.getItem("HP1");
  maxMP1 = localStorage.getItem("maxMP1");
  MP1 = localStorage.getItem("MP1");
  maxSP1 = localStorage.getItem("maxSP1");
  SP1  = localStorage.getItem("SP1");
  attack1 = localStorage.getItem("attack1");
  defense1 = localStorage.getItem("defense1");
  magic1 = localStorage.getItem("magic1");
  dexterity1 = localStorage.getItem("dexterity1");
  localStorage.setItem("intro1", true);
  }
  else if (fileNumber === "2"){
    localStorage.setItem("lvlTwo", "1");
    localStorage.setItem("expTwo", "0");
    localStorage.setItem("maxHP2", "110");
    localStorage.setItem("HP2", "110");
    localStorage.setItem("maxMP2", "110");
    localStorage.setItem("MP2", "110");
    localStorage.setItem("maxSP2", "110");
    localStorage.setItem("SP2", "110");
    localStorage.setItem("attack2", "2");
    localStorage.setItem("defense2", "2");
    localStorage.setItem("magic2", "2");
    localStorage.setItem("dexterity2", "2");
    maxHP2 = localStorage.getItem("maxHP2");
    HP2 = localStorage.getItem("HP2");
    maxMP2 = localStorage.getItem("maxMP2");
    MP2 = localStorage.getItem("MP2");
    maxSP2 = localStorage.getItem("maxSP2");
    SP2  = localStorage.getItem("SP2");
    attack2 = localStorage.getItem("attack2");
    defense2 = localStorage.getItem("defense2");
    magic2 = localStorage.getItem("magic2");
    dexterity2 = localStorage.getItem("dexterity2");
    localStorage.setItem("intro2", true);
    }
  else if (fileNumber === "3"){
    localStorage.setItem("lvlThree", "1");
    localStorage.setItem("expThree", "0");
    localStorage.setItem("maxHP3", "110");
    localStorage.setItem("HP3", "110");
    localStorage.setItem("maxMP3", "110");
    localStorage.setItem("MP3", "110");
    localStorage.setItem("maxSP3", "110");
    localStorage.setItem("SP3", "110");
    localStorage.setItem("attack3", "2");
    localStorage.setItem("defense3", "2");
    localStorage.setItem("magic3", "2");
    localStorage.setItem("dexterity3", "2");
    maxHP3 = localStorage.getItem("maxHP3");
    HP3 = localStorage.getItem("HP3");
    maxMP3 = localStorage.getItem("maxMP3");
    MP2 = localStorage.getItem("MP3");
    maxSP3 = localStorage.getItem("maxSP3");
    SP3  = localStorage.getItem("SP3");
    attack3 = localStorage.getItem("attack3");
    defense3 = localStorage.getItem("defense3");
    magic3 = localStorage.getItem("magic3");
    dexterity3 = localStorage.getItem("dexterity3");
    localStorage.setItem("intro3", true);
    };
    document.getElementById("confirmIntro").style.display="block";
};

function startAttack(){
  fileNumber = localStorage.getItem("fileNumber");
  console.log(fileNumber);
  if (fileNumber === "1"){
  localStorage.setItem("lvlOne", "1");
  localStorage.setItem("expOne", "0");
  localStorage.setItem("maxHP1", "120");
  localStorage.setItem("HP1", "120");
  localStorage.setItem("maxMP1", "90");
  localStorage.setItem("MP1", "90");
  localStorage.setItem("maxSP1", "110");
  localStorage.setItem("SP1", "110");
  localStorage.setItem("attack1", "3");
  localStorage.setItem("defense1", "2");
  localStorage.setItem("magic1", "1");
  localStorage.setItem("dexterity1", "2");
  maxHP1 = localStorage.getItem("maxHP1");
  HP1 = localStorage.getItem("HP1");
  maxMP1 = localStorage.getItem("maxMP1");
  MP1 = localStorage.getItem("MP1");
  maxSP1 = localStorage.getItem("maxSP1");
  SP1  = localStorage.getItem("SP1");
  attack1 = localStorage.getItem("attack1");
  defense1 = localStorage.getItem("defense1");
  magic1 = localStorage.getItem("magic1");
  dexterity1 = localStorage.getItem("dexterity1");
  localStorage.setItem("intro1", true);
  }
  else if (fileNumber === "2"){
    localStorage.setItem("lvlTwo", "1");
    localStorage.setItem("expTwo", "0");
    localStorage.setItem("maxHP2", "120");
    localStorage.setItem("HP2", "120");
    localStorage.setItem("maxMP2", "90");
    localStorage.setItem("MP2", "90");
    localStorage.setItem("maxSP2", "110");
    localStorage.setItem("SP2", "110");
    localStorage.setItem("attack2", "3");
    localStorage.setItem("defense2", "2");
    localStorage.setItem("magic2", "1");
    localStorage.setItem("dexterity2", "2");
    maxHP2 = localStorage.getItem("maxHP2");
    HP2 = localStorage.getItem("HP2");
    maxMP2 = localStorage.getItem("maxMP2");
    MP2 = localStorage.getItem("MP2");
    maxSP2 = localStorage.getItem("maxSP2");
    SP2  = localStorage.getItem("SP2");
    attack2 = localStorage.getItem("attack2");
    defense2 = localStorage.getItem("defense2");
    magic2 = localStorage.getItem("magic2");
    dexterity2 = localStorage.getItem("dexterity2");
    localStorage.setItem("intro2", true);
    }
  else if (fileNumber === "3"){
    localStorage.setItem("lvlThree", "1");
    localStorage.setItem("expThree", "0");
    localStorage.setItem("maxHP3", "120");
    localStorage.setItem("HP3", "120");
    localStorage.setItem("maxMP3", "90");
    localStorage.setItem("MP3", "90");
    localStorage.setItem("maxSP3", "110");
    localStorage.setItem("SP3", "110");
    localStorage.setItem("attack3", "3");
    localStorage.setItem("defense3", "2");
    localStorage.setItem("magic3", "1");
    localStorage.setItem("dexterity3", "2");
    maxHP3 = localStorage.getItem("maxHP3");
    HP3 = localStorage.getItem("HP3");
    maxMP3 = localStorage.getItem("maxMP3");
    MP2 = localStorage.getItem("MP3");
    maxSP3 = localStorage.getItem("maxSP3");
    SP3  = localStorage.getItem("SP3");
    attack3 = localStorage.getItem("attack3");
    defense3 = localStorage.getItem("defense3");
    magic3 = localStorage.getItem("magic3");
    dexterity3 = localStorage.getItem("dexterity3");
    localStorage.setItem("intro3", true);
    };
    document.getElementById("confirmIntro").style.display="block";
};

function startDefense(){
  fileNumber = localStorage.getItem("fileNumber");
  console.log(fileNumber);
  if (fileNumber === "1"){
  localStorage.setItem("lvlOne", "1");
  localStorage.setItem("expOne", "0");
  localStorage.setItem("maxHP1", "135");
  localStorage.setItem("HP1", "135");
  localStorage.setItem("maxMP1", "100");
  localStorage.setItem("MP1", "100");
  localStorage.setItem("maxSP1", "100");
  localStorage.setItem("SP1", "100");
  localStorage.setItem("attack1", "1");
  localStorage.setItem("defense1", "4");
  localStorage.setItem("magic1", "1");
  localStorage.setItem("dexterity1", "2");
  maxHP1 = localStorage.getItem("maxHP1");
  HP1 = localStorage.getItem("HP1");
  maxMP1 = localStorage.getItem("maxMP1");
  MP1 = localStorage.getItem("MP1");
  maxSP1 = localStorage.getItem("maxSP1");
  SP1  = localStorage.getItem("SP1");
  attack1 = localStorage.getItem("attack1");
  defense1 = localStorage.getItem("defense1");
  magic1 = localStorage.getItem("magic1");
  dexterity1 = localStorage.getItem("dexterity1");
  localStorage.setItem("intro1", true);
  }
  else if (fileNumber === "2"){
    localStorage.setItem("lvlTwo", "1");
    localStorage.setItem("expTwo", "0");
    localStorage.setItem("maxHP2", "135");
    localStorage.setItem("HP2", "135");
    localStorage.setItem("maxMP2", "100");
    localStorage.setItem("MP2", "100");
    localStorage.setItem("maxSP2", "100");
    localStorage.setItem("SP2", "100");
    localStorage.setItem("attack2", "1");
    localStorage.setItem("defense2", "4");
    localStorage.setItem("magic2", "1");
    localStorage.setItem("dexterity2", "2");
    maxHP2 = localStorage.getItem("maxHP2");
    HP2 = localStorage.getItem("HP2");
    maxMP2 = localStorage.getItem("maxMP2");
    MP2 = localStorage.getItem("MP2");
    maxSP2 = localStorage.getItem("maxSP2");
    SP2  = localStorage.getItem("SP2");
    attack2 = localStorage.getItem("attack2");
    defense2 = localStorage.getItem("defense2");
    magic2 = localStorage.getItem("magic2");
    dexterity2 = localStorage.getItem("dexterity2");
    localStorage.setItem("intro2", true);
    }
  else if (fileNumber === "3"){
    localStorage.setItem("lvlThree", "1");
    localStorage.setItem("expThree", "0");
    localStorage.setItem("maxHP3", "135");
    localStorage.setItem("HP3", "135");
    localStorage.setItem("maxMP3", "100");
    localStorage.setItem("MP3", "100");
    localStorage.setItem("maxSP3", "100");
    localStorage.setItem("SP3", "100");
    localStorage.setItem("attack3", "1");
    localStorage.setItem("defense3", "4");
    localStorage.setItem("magic3", "1");
    localStorage.setItem("dexterity3", "2");
    maxHP3 = localStorage.getItem("maxHP3");
    HP3 = localStorage.getItem("HP3");
    maxMP3 = localStorage.getItem("maxMP3");
    MP2 = localStorage.getItem("MP3");
    maxSP3 = localStorage.getItem("maxSP3");
    SP3  = localStorage.getItem("SP3");
    attack3 = localStorage.getItem("attack3");
    defense3 = localStorage.getItem("defense3");
    magic3 = localStorage.getItem("magic3");
    dexterity3 = localStorage.getItem("dexterity3");
    localStorage.setItem("intro3", true);
    };
    document.getElementById("confirmIntro").style.display="block";
};

function startMagic(){
  fileNumber = localStorage.getItem("fileNumber");
  console.log(fileNumber);
  if (fileNumber === "1"){
  localStorage.setItem("lvlOne", "1");
  localStorage.setItem("expOne", "0");
  localStorage.setItem("maxHP1", "100");
  localStorage.setItem("HP1", "100");
  localStorage.setItem("maxMP1", "150");
  localStorage.setItem("MP1", "150");
  localStorage.setItem("maxSP1", "80");
  localStorage.setItem("SP1", "80");
  localStorage.setItem("attack1", "1");
  localStorage.setItem("defense1", "1");
  localStorage.setItem("magic1", "4");
  localStorage.setItem("dexterity1", "2");
  maxHP1 = localStorage.getItem("maxHP1");
  HP1 = localStorage.getItem("HP1");
  maxMP1 = localStorage.getItem("maxMP1");
  MP1 = localStorage.getItem("MP1");
  maxSP1 = localStorage.getItem("maxSP1");
  SP1  = localStorage.getItem("SP1");
  attack1 = localStorage.getItem("attack1");
  defense1 = localStorage.getItem("defense1");
  magic1 = localStorage.getItem("magic1");
  dexterity1 = localStorage.getItem("dexterity1");
  localStorage.setItem("intro1", true);
  }
  else if (fileNumber === "2"){
    localStorage.setItem("lvlTwo", "1");
    localStorage.setItem("expTwo", "0");
    localStorage.setItem("maxHP2", "100");
    localStorage.setItem("HP2", "100");
    localStorage.setItem("maxMP2", "150");
    localStorage.setItem("MP2", "150");
    localStorage.setItem("maxSP2", "80");
    localStorage.setItem("SP2", "80");
    localStorage.setItem("attack2", "1");
    localStorage.setItem("defense2", "1");
    localStorage.setItem("magic2", "4");
    localStorage.setItem("dexterity2", "2");
    maxHP2 = localStorage.getItem("maxHP2");
    HP2 = localStorage.getItem("HP2");
    maxMP2 = localStorage.getItem("maxMP2");
    MP2 = localStorage.getItem("MP2");
    maxSP2 = localStorage.getItem("maxSP2");
    SP2  = localStorage.getItem("SP2");
    attack2 = localStorage.getItem("attack2");
    defense2 = localStorage.getItem("defense2");
    magic2 = localStorage.getItem("magic2");
    dexterity2 = localStorage.getItem("dexterity2");
    localStorage.setItem("intro2", true);
    }
  else if (fileNumber === "3"){
    localStorage.setItem("lvlThree", "1");
    localStorage.setItem("expThree", "0");
    localStorage.setItem("maxHP3", "100");
    localStorage.setItem("HP3", "100");
    localStorage.setItem("maxMP3", "150");
    localStorage.setItem("MP3", "150");
    localStorage.setItem("maxSP3", "80");
    localStorage.setItem("SP3", "80");
    localStorage.setItem("attack3", "1");
    localStorage.setItem("defense3", "1");
    localStorage.setItem("magic3", "4");
    localStorage.setItem("dexterity3", "2");
    maxHP3 = localStorage.getItem("maxHP3");
    HP3 = localStorage.getItem("HP3");
    maxMP3 = localStorage.getItem("maxMP3");
    MP2 = localStorage.getItem("MP3");
    maxSP3 = localStorage.getItem("maxSP3");
    SP3  = localStorage.getItem("SP3");
    attack3 = localStorage.getItem("attack3");
    defense3 = localStorage.getItem("defense3");
    magic3 = localStorage.getItem("magic3");
    dexterity3 = localStorage.getItem("dexterity3");
    localStorage.setItem("intro3", true);
    };
    document.getElementById("confirmIntro").style.display="block";
};

function unsure(){
  document.getElementById("confirmIntro").style.display="none";
};

function confirm(){
  window.location='game';
};