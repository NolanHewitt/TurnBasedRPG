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
//Money for each file
let money1 = localStorage.getItem("money1");
let money2 = localStorage.getItem("money2");
let money3 = localStorage.getItem("money3");
//Weapon for each file
let weapon1 = localStorage.getItem("weapon1");
let weapon2 = localStorage.getItem("weapon2");
let weapon3 = localStorage.getItem("weapon3");
//Weapon attack for each file
let weaponAtk1 = localStorage.getItem("weaponAtk1");
let weaponAtk2 = localStorage.getItem("weaponAtk2");
let weaponAtk3 = localStorage.getItem("weaponAtk3");
//Weapon value for each file
let weaponValue1 = localStorage.getItem("weaponValue1");
let weaponValue2 = localStorage.getItem("weaponValue2");
let weaponValue3 = localStorage.getItem("weaponValue3");
//Armor for each file
let armor1 = localStorage.getItem("armor1");
let armor2 = localStorage.getItem("armor2");
let armor3 = localStorage.getItem("armor3");
//Armor defense for each file
let armorDef1 = localStorage.getItem("armorDef1");
let armorDef2 = localStorage.getItem("armorDef2");
let armorDef3 = localStorage.getItem("armorDef3");
//Armor value for each file
let armorValue1 = localStorage.getItem("armorValue1");
let armorValue2 = localStorage.getItem("armorValue2");
let armorValue3 = localStorage.getItem("armorValue3");
//Inventory for each file
let inventory1 = localStorage.getItem("inventory1");
let inventory2 = localStorage.getItem("inventory2");
let inventory3 = localStorage.getItem("inventory3");
//Inventory value for each file
let inventoryValue1 = localStorage.getItem("inventoryValue1");
let inventoryValue2 = localStorage.getItem("inventoryValue2");
let inventoryValue3 = localStorage.getItem("inventoryValue3");
//Arrays for updating inventory
let stuff1 = [];
let stuff2 = [];
let stuff3 = [];
//Arrays for updating inventory value
let stuffValue1 = [];
let stuffValue2 = [];
let stuffValue3 = [];
//Variables for holding inventory parsed from local storage
let stuffParse1;
let stuffParse2;
let stuffParse3;
//Variables for holding inventory values parsed from local storage
let stuffValueParse1;
let stuffValueParse2;
let stuffValueParse3;

//Process for adding an item to inventory1 as well as its corosponding value. Don't use this until after intro sets inventory to empty array.
// Check to see if user has enough money in local storage if this is a transaction
// stuff1 = JSON.parse(localStorage.getItem("inventory1"));
// stuffValue1 = JSON.parse(localStorage.getItem("inventoryValue1"));
// stuff1.push("item2");
// stuffValue1.push("itemValue2");
// localStorage.setItem("inventory1", JSON.stringify(stuff1));
// localStorage.setItem("inventoryValue1", JSON.stringify(stuffValue1));
// stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
// stuffValueParse1 = JSON.parse(localStorage.getItem("inventoryValue1"));
// Modify money if this is a transaction
// console.log(stuffParse1 + " " + stuffValueParse1);

//Process for selling an item from inventory1 as well as its corosponding value. Don't use this until after intro sets inventory to empty array.
// Check to see if user has enough money in local storage if this is a transaction
// stuff1 = JSON.parse(localStorage.getItem("inventory1"));
// stuffValue1 = JSON.parse(localStorage.getItem("inventoryValue1"));
// stuff1.splice(stuff1.indexOf(item), 1);
// stuffValue1.splice(stuffValue1.indexOf(item), 1);
// localStorage.setItem("inventory1", JSON.stringify(stuff1));
// localStorage.setItem("inventoryValue1", JSON.stringify(stuffValue1));
// stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
// stuffValueParse1 = JSON.parse(localStorage.getItem("inventoryValue1"));
// Modify money if this is a transaction
// console.log(stuffParse1 + " " + stuffValueParse1);

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
  localStorage.setItem("money1", "0");
  localStorage.setItem("inventory1", JSON.stringify(stuff1));
  localStorage.setItem("inventoryValue1", JSON.stringify(stuffValue1));
  localStorage.setItem("weapon1", "Fists");
  localStorage.setItem("weaponAtk1", "0");
  localStorage.setItem("weaponValue1", "0");
  localStorage.setItem("armor1", "Cloth");
  localStorage.setItem("armorDef1", "0");
  localStorage.setItem("armorValue1", "0");
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
    localStorage.setItem("money2", "0");
    localStorage.setItem("inventory2", JSON.stringify(stuff2));
    localStorage.setItem("inventoryValue2", JSON.stringify(stuffValue2));
    localStorage.setItem("weapon2", "Fists");
    localStorage.setItem("weaponAtk2", "0");
    localStorage.setItem("weaponValue2", "0");
    localStorage.setItem("armor2", "Cloth");
    localStorage.setItem("armorDef2", "0");
    localStorage.setItem("armorValue2", "0");
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
    localStorage.setItem("money3", "0");
    localStorage.setItem("inventory3", JSON.stringify(stuff3));
    localStorage.setItem("inventoryValue3", JSON.stringify(stuffValue3));
    localStorage.setItem("weapon3", "Fists");
    localStorage.setItem("weaponAtk3", "0");
    localStorage.setItem("weaponValue3", "0");
    localStorage.setItem("armor3", "Cloth");
    localStorage.setItem("armorDef3", "0");
    localStorage.setItem("armorValue3", "0");
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
  localStorage.setItem("money1", "0");
  localStorage.setItem("inventory1", JSON.stringify(stuff1));
  localStorage.setItem("inventoryValue1", JSON.stringify(stuffValue1));
  localStorage.setItem("weapon1", "Fists");
  localStorage.setItem("weaponAtk1", "0");
  localStorage.setItem("weaponValue1", "0");
  localStorage.setItem("armor1", "Cloth");
  localStorage.setItem("armorDef1", "0");
  localStorage.setItem("armorValue1", "0");
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
    localStorage.setItem("money2", "0");
    localStorage.setItem("inventory2", JSON.stringify(stuff2));
    localStorage.setItem("inventoryValue2", JSON.stringify(stuffValue2));
    localStorage.setItem("weapon2", "Fists");
    localStorage.setItem("weaponAtk2", "0");
    localStorage.setItem("weaponValue2", "0");
    localStorage.setItem("armor2", "Cloth");
    localStorage.setItem("armorDef2", "0");
    localStorage.setItem("armorValue2", "0");
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
    localStorage.setItem("money3", "0");
    localStorage.setItem("inventory3", JSON.stringify(stuff3));
    localStorage.setItem("inventoryValue3", JSON.stringify(stuffValue3));
    localStorage.setItem("weapon3", "Fists");
    localStorage.setItem("weaponAtk3", "0");
    localStorage.setItem("weaponValue3", "0");
    localStorage.setItem("armor3", "Cloth");
    localStorage.setItem("armorDef3", "0");
    localStorage.setItem("armorValue3", "0");
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
  localStorage.setItem("money1", "0");
  localStorage.setItem("inventory1", JSON.stringify(stuff1));
  localStorage.setItem("inventoryValue1", JSON.stringify(stuffValue1));
  localStorage.setItem("weapon1", "Fists");
  localStorage.setItem("weaponAtk1", "0");
  localStorage.setItem("weaponValue1", "0");
  localStorage.setItem("armor1", "Cloth");
  localStorage.setItem("armorDef1", "0");
  localStorage.setItem("armorValue1", "0");
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
    localStorage.setItem("money2", "0");
    localStorage.setItem("inventory2", JSON.stringify(stuff2));
    localStorage.setItem("inventoryValue2", JSON.stringify(stuffValue2));
    localStorage.setItem("weapon2", "Fists");
    localStorage.setItem("weaponAtk2", "0");
    localStorage.setItem("weaponValue2", "0");
    localStorage.setItem("armor2", "Cloth");
    localStorage.setItem("armorDef2", "0");
    localStorage.setItem("armorValue2", "0");
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
    localStorage.setItem("money3", "0");
    localStorage.setItem("inventory3", JSON.stringify(stuff3));
    localStorage.setItem("inventoryValue3", JSON.stringify(stuffValue3));
    localStorage.setItem("weapon3", "Fists");
    localStorage.setItem("weaponAtk3", "0");
    localStorage.setItem("weaponValue3", "0");
    localStorage.setItem("armor3", "Cloth");
    localStorage.setItem("armorDef3", "0");
    localStorage.setItem("armorValue3", "0");
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
  localStorage.setItem("money1", "0");
  localStorage.setItem("inventory1", JSON.stringify(stuff1));
  localStorage.setItem("inventoryValue1", JSON.stringify(stuffValue1));
  localStorage.setItem("weapon1", "Fists");
  localStorage.setItem("weaponAtk1", "0");
  localStorage.setItem("weaponValue1", "0");
  localStorage.setItem("armor1", "Cloth");
  localStorage.setItem("armorDef1", "0");
  localStorage.setItem("armorValue1", "0");
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
    localStorage.setItem("money2", "0");
    localStorage.setItem("inventory2", JSON.stringify(stuff2));
    localStorage.setItem("inventoryValue2", JSON.stringify(stuffValue2));
    localStorage.setItem("weapon2", "Fists");
    localStorage.setItem("weaponAtk2", "0");
    localStorage.setItem("weaponValue2", "0");
    localStorage.setItem("armor2", "Cloth");
    localStorage.setItem("armorDef2", "0");
    localStorage.setItem("armorValue2", "0");
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
    localStorage.setItem("money3", "0");
    localStorage.setItem("inventory3", JSON.stringify(stuff3));
    localStorage.setItem("inventoryValue3", JSON.stringify(stuffValue3));
    localStorage.setItem("weapon3", "Fists");
    localStorage.setItem("weaponAtk3", "0");
    localStorage.setItem("weaponValue3", "0");
    localStorage.setItem("armor3", "Cloth");
    localStorage.setItem("armorDef3", "0");
    localStorage.setItem("armorValue3", "0");
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

const array = [2, 5, 9, 11, 14, 17, 21];

console.log(array);
  array.splice(1, 1);

// array = [2, 9]
console.log(array); 