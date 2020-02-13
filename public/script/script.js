//File number
let fileNumber = localStorage.getItem("fileNumber");
//lock for controls, mainly used in battle;
let controlsLocked = false;
//Determine if intro has already been completed
let intro1 = localStorage.getItem("intro1");
let intro2 = localStorage.getItem("intro2");
let intro3 = localStorage.getItem("intro3");
//Level for each file
let lvl1 = parseInt(localStorage.getItem("lvlOne"));
let lvl2 = parseInt(localStorage.getItem("lvlTwo"));
let lvl3 = parseInt(localStorage.getItem("lvlThree"));
//EXP for each file
let exp1 = parseInt(localStorage.getItem("expOne"));
let exp2 = parseInt(localStorage.getItem("expTwo"));
let exp3 = parseInt(localStorage.getItem("expThree"));
//EXP needed to level up
let expNeeded1 = parseInt(localStorage.getItem("expNeeded1"));
let expNeeded2 = parseInt(localStorage.getItem("expNeeded2"));
let expNeeded3 = parseInt(localStorage.getItem("expNeeded3"));
//use battleXP to store xp value earned from battle before adding it to exp
let battleXP;
//Money for each file
let money1 = parseInt(localStorage.getItem("money1"));
let money2 = parseInt(localStorage.getItem("money2"));
let money3 = parseInt(localStorage.getItem("money3"));
//Record number of enemies defeated in battles
let enemiesDefeated1 = parseInt(localStorage.getItem("enemiesDefeated1"));
let enemiesDefeated2 = parseInt(localStorage.getItem("enemiesDefeated2"));
let enemiesDefeated3 = parseInt(localStorage.getItem("enemiesDefeated3"));
//Record what initial player type is
let playerType1 = parseInt(localStorage.getItem("playerType1"));
let playerType2 = parseInt(localStorage.getItem("playerType2"));
let playerType3 = parseInt(localStorage.getItem("playerType3"));
//Weapon for each file
let weapon1 = parseInt(localStorage.getItem("weapon1"));
let weapon2 = parseInt(localStorage.getItem("weapon2"));
let weapon3 = parseInt(localStorage.getItem("weapon3"));
//Weapon attack for each file
let weaponAtk1 = parseInt(localStorage.getItem("weaponAtk1"));
let weaponAtk2 = parseInt(localStorage.getItem("weaponAtk2"));
let weaponAtk3 = parseInt(localStorage.getItem("weaponAtk3"));
//Weapon value for each file
let weaponValue1 = parseInt(localStorage.getItem("weaponValue1"));
let weaponValue2 = parseInt(localStorage.getItem("weaponValue2"));
let weaponValue3 = parseInt(localStorage.getItem("weaponValue3"));
//Armor for each file
let armor1 = parseInt(localStorage.getItem("armor1"));
let armor2 = parseInt(localStorage.getItem("armor2"));
let armor3 = parseInt(localStorage.getItem("armor3"));
//Armor defense for each file
let armorDef1 = parseInt(localStorage.getItem("armorDef1"));
let armorDef2 = parseInt(localStorage.getItem("armorDef2"));
let armorDef3 = parseInt(localStorage.getItem("armorDef3"));
//Armor value for each file
let armorValue1 = parseInt(localStorage.getItem("armorValue1"));
let armorValue2 = parseInt(localStorage.getItem("armorValue2"));
let armorValue3 = parseInt(localStorage.getItem("armorValue3"));
//Inventory for each file
let inventory1 = parseInt(localStorage.getItem("inventory1"));
let inventory2 = parseInt(localStorage.getItem("inventory2"));
let inventory3 = parseInt(localStorage.getItem("inventory3"));
//Arrays for updating inventory
let stuff1 = [];
let stuff2 = [];
let stuff3 = [];
//Variables for holding inventory parsed from local storage
let stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
let stuffParse2 = JSON.parse(localStorage.getItem("inventory2"));
let stuffParse3 = JSON.parse(localStorage.getItem("inventory3"));

//Process for adding an item to inventory1 as well as its corosponding value. Don't use this until after intro sets inventory to empty array.
// Check to see if user has enough money in local storage if this is a transaction
// stuff1 = JSON.parse(localStorage.getItem("inventory1"));
// stuffValue1 = JSON.parse(localStorage.getItem("inventoryValue1"));
// stuff1.push(item);
// stuffValue1.push(itemValue);
// localStorage.setItem("inventory1", JSON.stringify(stuff1));
// 
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
// 
// stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
// stuffValueParse1 = JSON.parse(localStorage.getItem("inventoryValue1"));
// Modify money if this is a transaction
// console.log(stuffParse1 + " " + stuffValueParse1);

//Max HP for each file
let maxHP1 = parseInt(localStorage.getItem("maxHP1"));
let maxHP2 = parseInt(localStorage.getItem("maxHP2"));
let maxHP3 = parseInt(localStorage.getItem("maxHP3"));
//Current HP for each file
let HP1 = parseInt(localStorage.getItem("HP1"));
let HP2 = parseInt(localStorage.getItem("HP2"));
let HP3 = parseInt(localStorage.getItem("HP3"));
//Max MP for each file
let maxMP1 = parseInt(localStorage.getItem("maxMP1"));
let maxMP2 = parseInt(localStorage.getItem("maxMP2"));
let maxMP3 = parseInt(localStorage.getItem("maxMP3"));
//Current MP for each file
let MP1 = parseInt(localStorage.getItem("MP1"));
let MP2 = parseInt(localStorage.getItem("MP2"));
let MP3 = parseInt(localStorage.getItem("MP3"));
//Max SP for each file
let maxSP1 = parseInt(localStorage.getItem("maxSP1"));
let maxSP2 = parseInt(localStorage.getItem("maxSP2"));
let maxSP3 = parseInt(localStorage.getItem("maxSP3"));
//Current SP for each file
let SP1 = parseInt(localStorage.getItem("SP1"));
let SP2 = parseInt(localStorage.getItem("SP2"));
let SP3 = parseInt(localStorage.getItem("SP3"));
//Attack stat for each file
let attack1 = parseInt(localStorage.getItem("attack1"));
let attack2 = parseInt(localStorage.getItem("attack2"));
let attack3 = parseInt(localStorage.getItem("attack3"));
//Defense stat for each file
let defense1 = parseInt(localStorage.getItem("defense1"));
let defense2 = parseInt(localStorage.getItem("defense2"));
let defense3 = parseInt(localStorage.getItem("defense3"));
//Magic stat for each file
let magic1 = parseInt(localStorage.getItem("magic1"));
let magic2 = parseInt(localStorage.getItem("magic2"));
let magic3 = parseInt(localStorage.getItem("magic3"));
//Dexterity stat for each file
let dexterity1 = parseInt(localStorage.getItem("dexterity1"));
let dexterity2 = parseInt(localStorage.getItem("dexterity2"));
let dexterity3 = parseInt(localStorage.getItem("dexterity3"));
//Holder for current enemy when the player gets into battle
let currentEnemy = parseInt(localStorage.getItem("currentEnemy"));
//rng value used fpr determining enemy that you will fight in a random battle
let rng = parseInt(localStorage.getItem("currentEnemy"));
let blockingModifier = 1;
let inBattle = localStorage.getItem("inBattle");
//Menu display variables
let shopDisplay = false;
let inventoryDisplay = false;
let skillsDisplay = false;

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
  document.getElementById("sure").innerHTML = "Balanced. Are you sure?";
  if (fileNumber === "1"){
  localStorage.setItem("lvlOne", "1");
  localStorage.setItem("expOne", "0");
  localStorage.setItem("playerType1", "Balanced");
  localStorage.setItem("enemiesDefeated1","0");
  localStorage.setItem("maxHP1", "12");
  localStorage.setItem("HP1", "12");
  localStorage.setItem("maxMP1", "12");
  localStorage.setItem("MP1", "12");
  localStorage.setItem("maxSP1", "12");
  localStorage.setItem("SP1", "12");
  localStorage.setItem("attack1", "2");
  localStorage.setItem("defense1", "2");
  localStorage.setItem("magic1", "2");
  localStorage.setItem("dexterity1", "2");
  localStorage.setItem("money1", "0");
  localStorage.setItem("inventory1", JSON.stringify(stuff1));
  localStorage.setItem("weapon1", "Fists");
  localStorage.setItem("weaponAtk1", "0");
  localStorage.setItem("weaponValue1", "0");
  localStorage.setItem("armor1", "Cloth");
  localStorage.setItem("armorDef1", "0");
  localStorage.setItem("armorValue1", "0");
  localStorage.setItem("expNeeded1", "100");
  localStorage.setItem("currentEnemy", "0");
  localStorage.setItem("intro1", true);
  localStorage.setItem("inBattle", false);
  }
  else if (fileNumber === "2"){
    localStorage.setItem("lvlTwo", "1");
    localStorage.setItem("expTwo", "0");
    localStorage.setItem("playerType2", "Balanced");
    localStorage.setItem("enemiesDefeated2","0");
    localStorage.setItem("maxHP2", "12");
    localStorage.setItem("HP2", "12");
    localStorage.setItem("maxMP2", "12");
    localStorage.setItem("MP2", "12");
    localStorage.setItem("maxSP2", "12");
    localStorage.setItem("SP2", "12");
    localStorage.setItem("attack2", "2");
    localStorage.setItem("defense2", "2");
    localStorage.setItem("magic2", "2");
    localStorage.setItem("dexterity2", "2");
    localStorage.setItem("money2", "0");
    localStorage.setItem("inventory2", JSON.stringify(stuff2));
    localStorage.setItem("weapon2", "Fists");
    localStorage.setItem("weaponAtk2", "0");
    localStorage.setItem("weaponValue2", "0");
    localStorage.setItem("armor2", "Cloth");
    localStorage.setItem("armorDef2", "0");
    localStorage.setItem("armorValue2", "0");
    localStorage.setItem("expNeeded2", "100");
    localStorage.setItem("currentEnemy", "0");
    localStorage.setItem("intro2", true);
    localStorage.setItem("inBattle", false);
    }
  else if (fileNumber === "3"){
    localStorage.setItem("lvlThree", "1");
    localStorage.setItem("expThree", "0");
    localStorage.setItem("playerType3", "Balanced");
    localStorage.setItem("enemiesDefeated3","0");
    localStorage.setItem("maxHP3", "12");
    localStorage.setItem("HP3", "12");
    localStorage.setItem("maxMP3", "12");
    localStorage.setItem("MP3", "12");
    localStorage.setItem("maxSP3", "12");
    localStorage.setItem("SP3", "12");
    localStorage.setItem("attack3", "2");
    localStorage.setItem("defense3", "2");
    localStorage.setItem("magic3", "2");
    localStorage.setItem("dexterity3", "2");
    localStorage.setItem("money3", "0");
    localStorage.setItem("inventory3", JSON.stringify(stuff3));
    localStorage.setItem("weapon3", "Fists");
    localStorage.setItem("weaponAtk3", "0");
    localStorage.setItem("weaponValue3", "0");
    localStorage.setItem("armor3", "Cloth");
    localStorage.setItem("armorDef3", "0");
    localStorage.setItem("armorValue3", "0");
    localStorage.setItem("expNeeded3", "100");
    localStorage.setItem("currentEnemy", "0");
    localStorage.setItem("intro3", true);
    localStorage.setItem("inBattle", false);
    };
    document.getElementById("confirmIntro").style.display="block";
};

function startAttack(){
  fileNumber = localStorage.getItem("fileNumber");
  console.log(fileNumber);
  document.getElementById("sure").innerHTML = "Attack. Are you sure?";
  if (fileNumber === "1"){
  localStorage.setItem("lvlOne", "1");
  localStorage.setItem("expOne", "0");
  localStorage.setItem("playerType1", "Attack");
  localStorage.setItem("enemiesDefeated1","0");
  localStorage.setItem("maxHP1", "12");
  localStorage.setItem("HP1", "12");
  localStorage.setItem("maxMP1", "8");
  localStorage.setItem("MP1", "8");
  localStorage.setItem("maxSP1", "16");
  localStorage.setItem("SP1", "16");
  localStorage.setItem("attack1", "3");
  localStorage.setItem("defense1", "2");
  localStorage.setItem("magic1", "1");
  localStorage.setItem("dexterity1", "2");
  localStorage.setItem("money1", "0");
  localStorage.setItem("inventory1", JSON.stringify(stuff1));
  localStorage.setItem("weapon1", "Fists");
  localStorage.setItem("weaponAtk1", "0");
  localStorage.setItem("weaponValue1", "0");
  localStorage.setItem("armor1", "Cloth");
  localStorage.setItem("armorDef1", "0");
  localStorage.setItem("armorValue1", "0");
  localStorage.setItem("expNeeded1", "100");
  localStorage.setItem("currentEnemy", "0");
  localStorage.setItem("intro1", true);
  localStorage.setItem("inBattle", false);
  }
  else if (fileNumber === "2"){
    localStorage.setItem("lvlTwo", "1");
    localStorage.setItem("expTwo", "0");
    localStorage.setItem("playerType2", "Attack");
    localStorage.setItem("enemiesDefeated2","0");
    localStorage.setItem("maxHP2", "12");
    localStorage.setItem("HP2", "12");
    localStorage.setItem("maxMP2", "8");
    localStorage.setItem("MP2", "8");
    localStorage.setItem("maxSP2", "16");
    localStorage.setItem("SP2", "16");
    localStorage.setItem("attack2", "3");
    localStorage.setItem("defense2", "2");
    localStorage.setItem("magic2", "1");
    localStorage.setItem("dexterity2", "2");
    localStorage.setItem("money2", "0");
    localStorage.setItem("inventory2", JSON.stringify(stuff2));
    localStorage.setItem("weapon2", "Fists");
    localStorage.setItem("weaponAtk2", "0");
    localStorage.setItem("weaponValue2", "0");
    localStorage.setItem("armor2", "Cloth");
    localStorage.setItem("armorDef2", "0");
    localStorage.setItem("armorValue2", "0");
    localStorage.setItem("expNeeded2", "100");
    localStorage.setItem("currentEnemy", "0");
    localStorage.setItem("intro2", true);
    localStorage.setItem("inBattle", false);
    }
  else if (fileNumber === "3"){
    localStorage.setItem("lvlThree", "1");
    localStorage.setItem("expThree", "0");
    localStorage.setItem("playerType3", "Attack");
    localStorage.setItem("enemiesDefeated3","0");
    localStorage.setItem("maxHP3", "12");
    localStorage.setItem("HP3", "12");
    localStorage.setItem("maxMP3", "8");
    localStorage.setItem("MP3", "8");
    localStorage.setItem("maxSP3", "16");
    localStorage.setItem("SP3", "16");
    localStorage.setItem("attack3", "3");
    localStorage.setItem("defense3", "2");
    localStorage.setItem("magic3", "1");
    localStorage.setItem("dexterity3", "2");
    localStorage.setItem("money3", "0");
    localStorage.setItem("inventory3", JSON.stringify(stuff3));
    localStorage.setItem("weapon3", "Fists");
    localStorage.setItem("weaponAtk3", "0");
    localStorage.setItem("weaponValue3", "0");
    localStorage.setItem("armor3", "Cloth");
    localStorage.setItem("armorDef3", "0");
    localStorage.setItem("armorValue3", "0");
    localStorage.setItem("expNeeded3", "100");
    localStorage.setItem("currentEnemy", "0");
    localStorage.setItem("intro3", true);
    localStorage.setItem("inBattle", false);
    };
    document.getElementById("confirmIntro").style.display="block";
};

function startDefense(){
  fileNumber = localStorage.getItem("fileNumber");
  console.log(fileNumber);
  document.getElementById("sure").innerHTML = "Defense. Are you sure?";
  if (fileNumber === "1"){
  localStorage.setItem("lvlOne", "1");
  localStorage.setItem("expOne", "0");
  localStorage.setItem("playerType1", "Defense");
  localStorage.setItem("enemiesDefeated1","0");
  localStorage.setItem("maxHP1", "16");
  localStorage.setItem("HP1", "16");
  localStorage.setItem("maxMP1", "10");
  localStorage.setItem("MP1", "10");
  localStorage.setItem("maxSP1", "10");
  localStorage.setItem("SP1", "10");
  localStorage.setItem("attack1", "1");
  localStorage.setItem("defense1", "4");
  localStorage.setItem("magic1", "1");
  localStorage.setItem("dexterity1", "2");
  localStorage.setItem("money1", "0");
  localStorage.setItem("inventory1", JSON.stringify(stuff1));
  localStorage.setItem("weapon1", "Fists");
  localStorage.setItem("weaponAtk1", "0");
  localStorage.setItem("weaponValue1", "0");
  localStorage.setItem("armor1", "Cloth");
  localStorage.setItem("armorDef1", "0");
  localStorage.setItem("armorValue1", "0");
  localStorage.setItem("expNeeded1", "100");
  localStorage.setItem("currentEnemy", "0");
  localStorage.setItem("intro1", true);
  localStorage.setItem("inBattle", false);
  }
  else if (fileNumber === "2"){
    localStorage.setItem("lvlTwo", "1");
    localStorage.setItem("expTwo", "0");
    localStorage.setItem("playerType2", "Defense");
    localStorage.setItem("enemiesDefeated2","0");
    localStorage.setItem("maxHP2", "16");
    localStorage.setItem("HP2", "16");
    localStorage.setItem("maxMP2", "10");
    localStorage.setItem("MP2", "10");
    localStorage.setItem("maxSP2", "10");
    localStorage.setItem("SP2", "10");
    localStorage.setItem("attack2", "1");
    localStorage.setItem("defense2", "4");
    localStorage.setItem("magic2", "1");
    localStorage.setItem("dexterity2", "2");
    localStorage.setItem("money2", "0");
    localStorage.setItem("inventory2", JSON.stringify(stuff2));
    localStorage.setItem("weapon2", "Fists");
    localStorage.setItem("weaponAtk2", "0");
    localStorage.setItem("weaponValue2", "0");
    localStorage.setItem("armor2", "Cloth");
    localStorage.setItem("armorDef2", "0");
    localStorage.setItem("armorValue2", "0");
    localStorage.setItem("expNeeded2", "100");
    localStorage.setItem("currentEnemy", "0");
    localStorage.setItem("intro2", true);
    localStorage.setItem("inBattle", false);
    }
  else if (fileNumber === "3"){
    localStorage.setItem("lvlThree", "1");
    localStorage.setItem("expThree", "0");
    localStorage.setItem("playerType3", "Defense");
    localStorage.setItem("enemiesDefeated3","0");
    localStorage.setItem("maxHP3", "16");
    localStorage.setItem("HP3", "16");
    localStorage.setItem("maxMP3", "10");
    localStorage.setItem("MP3", "10");
    localStorage.setItem("maxSP3", "10");
    localStorage.setItem("SP3", "10");
    localStorage.setItem("attack3", "1");
    localStorage.setItem("defense3", "4");
    localStorage.setItem("magic3", "1");
    localStorage.setItem("dexterity3", "2");
    localStorage.setItem("money3", "0");
    localStorage.setItem("inventory3", JSON.stringify(stuff3));
    localStorage.setItem("weapon3", "Fists");
    localStorage.setItem("weaponAtk3", "0");
    localStorage.setItem("weaponValue3", "0");
    localStorage.setItem("armor3", "Cloth");
    localStorage.setItem("armorDef3", "0");
    localStorage.setItem("armorValue3", "0");
    localStorage.setItem("expNeeded3", "100");
    localStorage.setItem("currentEnemy", "0");
    localStorage.setItem("intro3", true);
    localStorage.setItem("inBattle", false);
    };
    document.getElementById("confirmIntro").style.display="block";
};

function startMagic(){
  fileNumber = localStorage.getItem("fileNumber");
  console.log(fileNumber);
  document.getElementById("sure").innerHTML = "Magic. Are you sure?";
  if (fileNumber === "1"){
  localStorage.setItem("lvlOne", "1");
  localStorage.setItem("expOne", "0");
  localStorage.setItem("playerType1", "Magic");
  localStorage.setItem("enemiesDefeated1","0");
  localStorage.setItem("maxHP1", "10");
  localStorage.setItem("HP1", "10");
  localStorage.setItem("maxMP1", "20");
  localStorage.setItem("MP1", "20");
  localStorage.setItem("maxSP1", "6");
  localStorage.setItem("SP1", "6");
  localStorage.setItem("attack1", "1");
  localStorage.setItem("defense1", "1");
  localStorage.setItem("magic1", "4");
  localStorage.setItem("dexterity1", "2");
  localStorage.setItem("money1", "0");
  localStorage.setItem("inventory1", JSON.stringify(stuff1));
  localStorage.setItem("weapon1", "Fists");
  localStorage.setItem("weaponAtk1", "0");
  localStorage.setItem("weaponValue1", "0");
  localStorage.setItem("armor1", "Cloth");
  localStorage.setItem("armorDef1", "0");
  localStorage.setItem("armorValue1", "0");
  localStorage.setItem("expNeeded1", "100");
  localStorage.setItem("currentEnemy", "0");
  localStorage.setItem("intro1", true);
  localStorage.setItem("inBattle", false);
  }
  else if (fileNumber === "2"){
    localStorage.setItem("lvlTwo", "1");
    localStorage.setItem("expTwo", "0");
    localStorage.setItem("playerType2", "Magic");
    localStorage.setItem("enemiesDefeated2","0");
    localStorage.setItem("maxHP2", "10");
    localStorage.setItem("HP2", "10");
    localStorage.setItem("maxMP2", "20");
    localStorage.setItem("MP2", "20");
    localStorage.setItem("maxSP2", "6");
    localStorage.setItem("SP2", "6");
    localStorage.setItem("attack2", "1");
    localStorage.setItem("defense2", "1");
    localStorage.setItem("magic2", "4");
    localStorage.setItem("dexterity2", "2");
    localStorage.setItem("money2", "0");
    localStorage.setItem("inventory2", JSON.stringify(stuff2));
    localStorage.setItem("weapon2", "Fists");
    localStorage.setItem("weaponAtk2", "0");
    localStorage.setItem("weaponValue2", "0");
    localStorage.setItem("armor2", "Cloth");
    localStorage.setItem("armorDef2", "0");
    localStorage.setItem("armorValue2", "0");
    localStorage.setItem("expNeeded2", "100");
    localStorage.setItem("currentEnemy", "0");
    localStorage.setItem("intro2", true);
    localStorage.setItem("inBattle", false);
    }
  else if (fileNumber === "3"){
    localStorage.setItem("lvlThree", "1");
    localStorage.setItem("expThree", "0");
    localStorage.setItem("playerType3", "Magic");
    localStorage.setItem("enemiesDefeated3","0");
    localStorage.setItem("maxHP3", "10");
    localStorage.setItem("HP3", "10");
    localStorage.setItem("maxMP3", "20");
    localStorage.setItem("MP3", "20");
    localStorage.setItem("maxSP3", "6");
    localStorage.setItem("SP3", "6");
    localStorage.setItem("attack3", "1");
    localStorage.setItem("defense3", "1");
    localStorage.setItem("magic3", "4");
    localStorage.setItem("dexterity3", "2");
    localStorage.setItem("money3", "0");
    localStorage.setItem("inventory3", JSON.stringify(stuff3));
    localStorage.setItem("weapon3", "Fists");
    localStorage.setItem("weaponAtk3", "0");
    localStorage.setItem("weaponValue3", "0");
    localStorage.setItem("armor3", "Cloth");
    localStorage.setItem("armorDef3", "0");
    localStorage.setItem("armorValue3", "0");
    localStorage.setItem("expNeeded3", "100");
    localStorage.setItem("currentEnemy", "0");
    localStorage.setItem("intro3", true);
    localStorage.setItem("inBattle", false);
    };
    document.getElementById("confirmIntro").style.display="block";
};

function unsure(){
  document.getElementById("confirmIntro").style.display="none";
};

function confirm(){
  window.location='game';
}; 

//Main Game Script

function restoreHP(){
if (fileNumber === "1"){
  HP1 = maxHP1;
  localStorage.setItem("HP1", HP1);
  console.log("HP1 maxed, HP1 is now " + HP1);
}
else if (fileNumber === "2"){
  HP2 = maxHP2;
  localStorage.setItem("HP2", HP2);
  console.log("HP2 maxed, HP2 is now " + HP2);
}
else if (fileNumber === "3"){
  HP3 = maxHP3;
  localStorage.setItem("HP3", HP3);
  console.log("HP3 maxed, HP3 is now " + HP3);
};
};

function restoreMP(){
  if (fileNumber === "1"){
    MP1 = maxMP1;
    localStorage.setItem("MP1", MP1);
    console.log("MP1 maxed, MP1 is now " + MP1);
  }
  else if (fileNumber === "2"){
    MP2 = maxMP2;
    localStorage.setItem("MP2", MP2);
    console.log("MP2 maxed, MP2 is now " + MP2);
  }
  else if (fileNumber === "3"){
    MP3 = maxMP3;
    localStorage.setItem("MP3", MP3);
    console.log("MP3 maxed, MP3 is now " + MP3);
  };
};

function restoreSP(){
  if (fileNumber === "1"){
    SP1 = maxSP1;
    localStorage.setItem("SP1", SP1);
    console.log("SP1 maxed, SP1 is now " + SP1);
  }
  else if (fileNumber === "2"){
    SP2 = maxSP2;
    localStorage.setItem("SP2", SP2);
    console.log("SP2 maxed, SP2 is now " + SP2);
  }
  else if (fileNumber === "3"){
    SP3 = maxSP3;
    localStorage.setItem("SP3", SP3);
    console.log("SP3 maxed, SP3 is now " + SP3);
  };
};

  function prepareBattle(){
    //rng used to determine the level of enemy the player will fight, they will only fight monsters up to 5 levels higher than themselves
    if (fileNumber === "1"){
      rng = Math.floor(Math.random() * 5) + parseInt(lvl1);
      console.log(rng);  
    }
    else if (fileNumber === "2"){
      rng = Math.floor(Math.random() * 5) + parseInt(lvl2);
      console.log(rng);  
    }
    else if (fileNumber === "3"){
      rng = Math.floor(Math.random() * 5) + parseInt(lvl3);
      console.log(rng);  
    };
    localStorage.setItem("currentEnemy", rng);
    localStorage.setItem("inBattle", true);
    window.location = "battle";
  };
  

  //Battle script

  //Enemy constructor
  function Enemy(name, lvl, hp, maxHP, atk, def, mp, lore) {
    this.enemyName = name
    this.enemyLvl = lvl;
    this.enemyHp = hp;
    this.enemyMaxHp = maxHP;
    this.enemyAtk = atk;
    this.enemyDef = def;
    this.enemyMp = mp;
    this.enemyLore = lore;
  };

  //All enemies go here, must have enough enemies to be 5 lvls higher than what the player can reach
  const enemy1 = new Enemy("John", 1, 10, 10, 1, 0, 5, "John lore goes here");
  const enemy2 = new Enemy("Bob", 2, 12, 12, 2, 0, 5, "Bob lore goes here");
  const enemy3 = new Enemy("George", 3, 12, 12, 1, 0, 10, "George lore goes here");
  const enemy4 = new Enemy("Nolan", 4, 15, 15, 1, 1, 5, "Nolan lore goes here");
  const enemy5 = new Enemy("Dan", 5, 15, 15, 2, 1, 0, "Dan lore goes here");

  let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];

  //How to select random enemy
  console.log(allEnemies[rng-1]);

  let opponentName = allEnemies[rng-1].enemyName;
  let opponentLvl = allEnemies[rng-1].enemyLvl;
  let opponentHp = allEnemies[rng-1].enemyHp;
  let opponentMaxHp = allEnemies[rng-1].enemyMaxHp;
  let opponentAtk = allEnemies[rng-1].enemyAtk;
  let opponentDef = allEnemies[rng-1].enemyDef;
  let opponentMp = allEnemies[rng-1].enemyMp;
  let opponentLore = allEnemies[rng-1].enemyLore;
  console.log("Enemy name: " + opponentName);
  console.log("Enemy lvl: " + opponentLvl);
  console.log("Enemy HP: " + opponentHp);
  console.log("Enemy Max HP: " + opponentMaxHp);
  console.log("Enemy atk: " + opponentAtk);
  console.log("Enemy def: " + opponentDef);
  console.log("Enemy MP: " + opponentMp);
  console.log(opponentLore);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //function for when you attempt a standard attack
  function attack(){

if (fileNumber === "1"){
  
    //File 1
   if (controlsLocked === false){
    console.log("attacking...");
    //First lock the controls until everything is done
    controlsLocked = true;
    //determine chance to hit the enemy based on your dexterity
    let hitChance = (.15 * dexterity1) + 80;
    console.log("Chance to hit the enemy is " + hitChance);
    //generate a random number to see if you hit the enemy
    let hitAttempt = Math.random() * 100;
    console.log(hitAttempt);
    //logic to determine if you hit the enemy
    if (hitChance > hitAttempt){
      //deal damage to the enemy based on your attack and the enemies defense if you hit
      //if you have enough attack to deal 1 or more damage
      if ((attack1 + weaponAtk1 - opponentDef) >= 1){
        opponentHp = opponentHp - (attack1 + weaponAtk1 - opponentDef);
        console.log("Enemy HP is " + opponentHp);
      }
      //if you do not
      else {
        opponentHp = opponentHp - 1;
        console.log("Enemy HP is " + opponentHp);
      };

      //Insert function here to check if the enemy has been defeated
      if (opponentHp > 0){
        console.log("enemy is still alive");
        //Enemy attack function here
       enemyAttack1();
      }
      else if (opponentHp <= 0){
        console.log("enemy is dead");
        endBattleRewards();
      };
    }
    else {
      console.log("miss");

      //Insert function here to check if the enemy has been defeated
      if (opponentHp > 0){
        console.log("enemy is still alive");
        //Enemy attack function here
         enemyAttack1();
      };
    };
   }
   else {
     console.log("controls are still locked");
   };
  }
else if (fileNumber === "2"){
   //File 2
   if (controlsLocked === false){
    console.log("attacking...");
    //First lock the controls until everything is done
    controlsLocked = true;
    //determine chance to hit the enemy based on your dexterity
    let hitChance = (.15 * dexterity2 + 80);
    console.log("Chance to hit the enemy is " + hitChance);
    //generate a random number to see if you hit the enemy
    let hitAttempt = Math.random() * 100;
    console.log(hitAttempt);
    //logic to determine if yoy hit the enemy
    if (hitChance > hitAttempt){
      //deal damage to the enemy based on your attack and the enemies defense if you hit
      //if you have enough attack to deal 1 or more damage
      if ((attack2 + weaponAtk2 - opponentDef) >= 1){
        opponentHp = opponentHp - (attack2 + weaponAtk2 - opponentDef);
        console.log("Enemy HP is " + opponentHp);
      }
      //if you do not
      else {
        opponentHp = opponentHp - 1;
        console.log("Enemy HP is " + opponentHp);
      };

      //Insert function here to check if the enemy has been defeated
      if (opponentHp > 0){
        console.log("enemy is still alive");
        //Enemy attack function here
        enemyAttack2();
      }
      else if (opponentHp <= 0){
        console.log("enemy is dead");
        endBattleRewards();
      };
    }
    else {
      console.log("miss");

      //Insert function here to check if the enemy has been defeated
      if (opponentHp > 0){
        console.log("enemy is still alive");
        //Enemy attack function here
        enemyAttack2();
      };
    };
   }
   else {
     console.log("controls are still locked");
   };
  }

  else if (fileNumber === "3"){
   //File 3
   if (controlsLocked === false){
    console.log("attacking...");
    //First lock the controls until everything is done
    controlsLocked = true;
    //determine chance to hit the enemy based on your dexterity
    let hitChance = (.15 * dexterity3) + 80;
    console.log("Chance to hit the enemy is " + hitChance);
    //generate a random number to see if you hit the enemy
    let hitAttempt = Math.random() * 100;
    console.log(hitAttempt);
    //logic to determine if yoy hit the enemy
    if (hitChance > hitAttempt){
      //deal damage to the enemy based on your attack and the enemies defense if you hit
      //if you have enough attack to deal 1 or more damage
      if ((attack3 + weaponAtk3 - opponentDef) >= 1){
        opponentHp = opponentHp - (attack3 + weaponAtk3 - opponentDef);
        console.log("Enemy HP is " + opponentHp);
      }
      //if you do not
      else {
        opponentHp = opponentHp - 1;
        console.log("Enemy HP is " + opponentHp);
      };

      //Insert function here to check if the enemy has been defeated
      if (opponentHp > 0){
        console.log("enemy is still alive");
        //Enemy attack function here
        enemyAttack3();
      }
      else if (opponentHp <= 0){
        console.log("enemy is dead");
        endBattleRewards();
      };
    }
    else {
      console.log("miss");

      //Insert function here to check if the enemy has been defeated
      if (opponentHp > 0){
        console.log("enemy is still alive");
        //Enemy attack function here
        enemyAttack3();
      };
    };
   }
   else {
     console.log("controls are still locked");
   };
  };
   //end
  };
//End of normal attack function

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//Block Function
function block(){
//Function for enemy to attack you with reduced damage, divided by 4 to be exact.

if (fileNumber === "1"){
//File 1 block
if (controlsLocked === false){
  console.log("blocking...");
  blockingModifier = 4;
  controlsLocked = true;
  enemyAttack1();
};
}
else if (fileNumber === "2"){
//File 2 block
if (controlsLocked === false){
  console.log("blocking...");
  blockingModifier = 4;
  controlsLocked = true;
  enemyAttack2();
};
}
else if (fileNumber === "3"){
//File 3 block
if (controlsLocked === false){
  console.log("blocking...");
  blockingModifier = 4;
  controlsLocked = true;
  enemyAttack3();
};
}
else {
  console.log("Controls are locked");
};
};
//End of block function

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Flee function
function flee(){
 if (controlsLocked === false){
   controlsLocked = true;
  if (fileNumber === "1"){
    console.log("flee from file 1");
  //Flee for file 1
  let fleeAttemptChance = (.42 * dexterity1) + 33;
  console.log(fleeAttemptChance);
  let fleeAttempt = Math.random() * 100;
  console.log(fleeAttempt);
  if (fleeAttempt <= fleeAttemptChance){
    console.log("flee attempt succesful");
    localStorage.setItem("HP1", HP1);
    localStorage.setItem("MP1", MP1);
    localStorage.setItem("SP1", SP1);
    window.location = "game";
    controlsLocked = false;
  }
  else {
    console.log("flee not attempt succesful");
    enemyAttack1();
  };
}
else if (fileNumber === "2"){
  //Flee for file 2
  let fleeAttemptChance = (.42 * dexterity1) + 33;
  console.log(fleeAttemptChance);
  let fleeAttempt = Math.random() * 100;
  console.log(fleeAttempt);
  if (fleeAttempt <= fleeAttemptChance){
    console.log("flee attempt succesful");
    localStorage.setItem("HP2", HP2);
    localStorage.setItem("MP2", MP2);
    localStorage.setItem("SP2", SP2);
    window.location = "game";
    controlsLocked = false;
  }
  else {
    console.log("flee not attempt succesful");
    enemyAttack2();
  };
}
else if (fileNumber === "3"){
  //Flee for file 3
  let fleeAttemptChance = (.42 * dexterity1) + 33;
  console.log(fleeAttemptChance);
  let fleeAttempt = Math.random() * 100;
  console.log(fleeAttempt);
  if (fleeAttempt <= fleeAttemptChance){
    console.log("flee attempt succesful");
    localStorage.setItem("HP3", HP3);
    localStorage.setItem("MP3", MP3);
    localStorage.setItem("SP3", SP3);
    window.location = "game";
    controlsLocked = false;
  }
  else {
    console.log("flee not attempt succesful");
    enemyAttack3();
  };
};
}
else{
  console.log("controls still locked");
};
};

//---------------------------------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//beggining of function for the enemies attack against you

//File 1
function enemyAttack1(){
 if(inBattle === "true"){
  setTimeout(function(){
    //If opponent has enough attack to deal 1 or more damage
    if (((opponentAtk - defense1 - armorDef1)/blockingModifier) >= 1){
    HP1 = HP1 - ((opponentAtk - defense1 - armorDef1)/blockingModifier);
    console.log("The enemy did " + ((opponentAtk - defense1 - armorDef1)/blockingModifier) + " DMG.");
    console.log("Your health is " + HP1);
    blockingModifier = 1;
    }
    //If they dont
    else {
    HP1 = HP1 - 1;
    console.log("The enemy did " + 1 + " DMG.");
    console.log("Your health is " + HP1);
    };
    //Unlock controls after the enemy has completed their attack turn
    controlsLocked = false;
    console.log("controls unlocked");
  }, 2500);
 }
 else {
   console.log("Item used");
   controlsLocked= false;
 };
};

//File 2
function enemyAttack2(){
 if(inBattle === "true"){
  setTimeout(function(){
    //If opponent has enough attack to deal 1 or more damage
    if (((opponentAtk - defense2 - armorDef2)/blockingModifier) >= 1){
    HP2 = HP2 - ((opponentAtk - defense2 - armorDef2)/blockingModifier);
    console.log("The enemy did " + ((opponentAtk - defense2 - armorDef2)/blockingModifier) + " DMG.");
    console.log("Your health is " + HP2);
    blockingModifier = 1;
    }
    //If they dont
    else {
    HP2 = HP2 - 1;
    console.log("The enemy did " + 1 + " DMG.");
    console.log("Your health is " + HP2);
    };
    //Unlock controls after the enemy has completed their attack turn
    controlsLocked = false;
    console.log("controls unlocked");
  }, 2500);
}
else {
  console.log("Item used");
  controlsLocked= false;
 };
};

//File 3
function enemyAttack3(){
 if(inBattle === "true"){
  setTimeout(function(){
    //If opponent has enough attack to deal 1 or more damage
    if (((opponentAtk - defense3 - armorDef3)/blockingModifier) >= 1){
    HP3 = HP3 - ((opponentAtk - defense3 - armorDef3)/blockingModifier);
    console.log("The enemy did " + ((opponentAtk - defense3 - armorDef3)/blockingModifier) + " DMG.");
    console.log("Your health is " + HP3);
    blockingModifier = 1;
    }
    //If they dont
    else {
    HP3 = HP3 - 1;
    console.log("The enemy did " + 1 + " DMG.");
    console.log("Your health is " + HP3);
    };
    //Unlock controls after the enemy has completed their attack turn
    controlsLocked = false;
    console.log("controls unlocked");
  }, 2500);
}
else {
  console.log("Item used");
  controlsLocked= false;
 };
};

//end of function for the enemies attack against you

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//function for after you win a battle to get rewards/xp and then display the button to return home
function endBattleRewards(){
  battleXP = (Math.floor(Math.random() * 19) - 9 + (opponentLvl * 10));
  battleMoney = (Math.floor(Math.random() * 19) + 11 + (opponentLvl * 10));
  //display leave battle button
  document.getElementById("returnHome").style.display = "block";
};

function returnHome(){

  //insert function to save all player stats and rewards here so they persevere to the next page
  if (fileNumber === "1"){
  localStorage.setItem("expOne", exp1 + battleXP);
  localStorage.setItem("enemiesDefeated1", enemiesDefeated1 + 1);
  localStorage.setItem("HP1", HP1);
  localStorage.setItem("MP1", MP1);
  localStorage.setItem("SP1", SP1);
  localStorage.setItem("money1", money1 + battleMoney);
  localStorage.setItem("inBattle", false);
  //Return to prebattle area
  window.location = "game";
  }
  else if (fileNumber === "2"){
    localStorage.setItem("expTwo", exp2 + battleXP);
    localStorage.setItem("enemiesDefeated2", enemiesDefeated2 + 1);
    localStorage.setItem("HP2", HP2);
    localStorage.setItem("MP2", MP2);
    localStorage.setItem("SP2", SP2);
    localStorage.setItem("money2", money2 + battleMoney);
    //Return to prebattle area
    window.location = "game";
  }
  else if (fileNumber === "3"){
    localStorage.setItem("expThree", exp3 + battleXP);
    localStorage.setItem("enemiesDefeated3", enemiesDefeated3 + 1);
    localStorage.setItem("HP3", HP3);
    localStorage.setItem("MP3", MP3);
    localStorage.setItem("SP3", SP3);
    localStorage.setItem("money3", money3 + battleMoney);
    //Return to prebattle area
    window.location = "game";
  };
};
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Beginning of magic function
let spellDisplay = false;
function displaySpells(){
  if (spellDisplay === false){
    document.getElementById("spellsContainer").style.display = "block";
    spellDisplay = true;
  }
  else if (spellDisplay === true){
    document.getElementById("spellsContainer").style.display = "none";
    spellDisplay = false;
  };
};



//Heal Function
function heal(){
  //Function for healing
  if (fileNumber === "1"){
  //File 1 heal
  if (MP1 >= 5){
  if (controlsLocked === false){
    console.log("healing for " + (magic1+1) + " HP.");
    controlsLocked = true;
    HP1 = HP1 + (magic1+1);
    MP1 = MP1 - 5;
    console.log(MP1 + " MP left");
    enemyAttack1();
  };
  }
  else{console.log("Not enough MP")};
  }
  else if (fileNumber === "2"){
  //File 2 heal
  if (MP2 >= 5){
  if (controlsLocked === false){
    console.log("healing for " + (magic2+1) + " HP.");
    controlsLocked = true;
    HP2 = HP2 + (magic2+1);
    MP2 = MP2 - 5;
    console.log(MP2 + " MP left");
    enemyAttack2();
  };
  }
  else{console.log("Not enough MP")};
  }
  else if (fileNumber === "3"){
  //File 3 heal
  if (MP3 >= 5){
  if (controlsLocked === false){
    console.log("healing for " + (magic3+1) + " HP.");
    controlsLocked = true;
    HP3 = HP3 + (magic3+1);
    MP3 = MP3 - 5;
    console.log(MP3 + " MP left");
    enemyAttack3();
  };
  }
  else{console.log("Not enough MP")};
  }
  else {
    console.log("Controls are locked");
  };
  };
  //End of heal function

  //---------------------------------------------------------

  //Magic Blast Function
function magicBlast(){
  //Function for magic blast
  if (fileNumber === "1"){
  //File 1 magic blast
  if (MP1 >= 10){
  if (controlsLocked === false){
    console.log("blasting for " + (((magic1+1) * 3) - opponentDef) + " damage.");
    controlsLocked = true;
    if ((((magic1+1) * 3) - opponentDef) >= 1){
      opponentHp = opponentHp - (((magic1+1) * 3) - opponentDef);
      console.log("Enemy has " + opponentHp + " HP left.");
      MP1 = MP1 - 10;
      console.log(MP1 + " MP left");
    }
    else {
      opponentHp = opponentHp - 1;
      console.log("Enemy has " + opponentHp + " HP left.");
      MP1 = MP1 - 10;
      console.log(MP1 + " MP left");
    };
    if (opponentHp > 0){
      console.log("enemy is still alive");
      //Enemy attack function here
     enemyAttack1();
    }
    else if (opponentHp <= 0){
      console.log("enemy is dead");
      endBattleRewards();
    };
  };
  }
  else{console.log("Not enough MP.")};
  }
  else if (fileNumber === "2"){
  //File 2 magic blast
  if (MP2 >= 10){
  if (controlsLocked === false){
    console.log("blasting for " + (((magic1+1) * 3) - opponentDef) + " damage.");
    controlsLocked = true;
    if ((((magic2+1) * 3) - opponentDef) >= 1){
      opponentHp = opponentHp - (((magic2+1) * 3) - opponentDef);
      console.log("Enemy has " + opponentHp + " HP left.");
      MP2 = MP2 - 10;
      console.log(MP2 + " MP left");
    }
    else {
      opponentHp = opponentHp - 1;
      console.log("Enemy has " + opponentHp + " HP left.");
      MP2 = MP2 - 10;
      console.log(MP2 + " MP left");
    };
    if (opponentHp > 0){
      console.log("enemy is still alive");
      //Enemy attack function here
     enemyAttack2();
    }
    else if (opponentHp <= 0){
      console.log("enemy is dead");
      endBattleRewards();
    };
  };
  }
  else{console.log("Not enough MP.")};
  }
  else if (fileNumber === "3"){
  //File 3 magic blast
  if (MP3 >= 10){
  if (controlsLocked === false){
    console.log("blasting for " + (((magic3+1) * 3) - opponentDef) + " damage.");
    controlsLocked = true;
    if ((((magic3+1) * 3) - opponentDef) >= 1){
      opponentHp = opponentHp - (((magic3+1) * 3) - opponentDef);
      console.log("Enemy has " + opponentHp + " HP left.");
      MP3 = MP3 - 10;
      console.log(MP3 + " MP left");
    }
    else {
      opponentHp = opponentHp - 1;
      console.log("Enemy has " + opponentHp + " HP left.");
      MP3 = MP3 - 10;
      console.log(MP3 + " MP left");
    };
    if (opponentHp > 0){
      console.log("enemy is still alive");
      //Enemy attack function here
     enemyAttack3();
    }
    else if (opponentHp <= 0){
      console.log("enemy is dead");
      endBattleRewards();
    };
  };
  }
  else{console.log("Not enough MP.")};
  }
  else {
    console.log("Controls are locked");
  };
  };
  //End of magic blast function

//------------------------------------------------------------------

  //Magic Cut Function
  function magicCut(){
    //Function for magic cut
    //File 1 magic cut
    if (fileNumber === "1"){
    if (MP1 >= 12){
    if (controlsLocked === false){
      console.log("blasting for " + ((magic1+1) * 2) + " damage.");
      controlsLocked = true;
      opponentHp = opponentHp - ((magic1+1) * 2);
      console.log("Enemy has " + opponentHp + " HP left.");
      MP1 = MP1 - 10;
      console.log(MP1 + " MP left");
      if (opponentHp > 0){
      console.log("enemy is still alive");
      //Enemy attack function here
     enemyAttack1();
    }
    else if (opponentHp <= 0){
      console.log("enemy is dead");
      endBattleRewards();
    };
    };
    }
    else{console.log("Not enough MP.")};
    }
    //File 2 magic cut
    else if (fileNumber === "2"){
    if (MP2 >= 12){
    if (controlsLocked === false){
      console.log("blasting for " + ((magic1+1) * 2) + " damage.");
      controlsLocked = true;
      opponentHp = opponentHp - ((magic1+1) * 2);
      console.log("Enemy has " + opponentHp + " HP left.");
      MP2 = MP2 - 10;
      console.log(MP2 + " MP left");
      if (opponentHp > 0){
        console.log("enemy is still alive");
        //Enemy attack function here
       enemyAttack2();
      }
      else if (opponentHp <= 0){
        console.log("enemy is dead");
        endBattleRewards();
      };
    };
    }
    else{console.log("Not enough MP.")};
    }
    //File 3 magic cut
    else if (fileNumber === "3"){
    if (MP3 >= 12){
    if (controlsLocked === false){
      console.log("blasting for " + ((magic1+1) * 2) + " damage.");
      controlsLocked = true;
      opponentHp = opponentHp - ((magic1+1) * 2);
      console.log("Enemy has " + opponentHp + " HP left.");
      MP3 = MP3 - 10;
      console.log(MP3 + " MP left");
      if (opponentHp > 0){
        console.log("enemy is still alive");
        //Enemy attack function here
       enemyAttack3();
      }
      else if (opponentHp <= 0){
        console.log("enemy is dead");
        endBattleRewards();
      };
    };
    }
    else{console.log("Not enough MP.")};
    }
    else {
      console.log("Controls are locked");
    };
    };
    //End of magic cut function

//-----------------------------------------------------------------------------------------

//Dexterity Up Function
function dexterityUp(){
  //Function for dexterity up
  if (fileNumber === "1"){
  //File 1 dexterity up
  if (MP1 >= 15){
  if (controlsLocked === false){
    console.log("dexterity up");
    controlsLocked = true;
    dexterity1 = dexterity1 + 20;
    MP1 = MP1 - 15;
    console.log(MP1 + " MP left");
    enemyAttack1();
  };
  }
  else{console.log("Not enough MP.")};
  }
  else if (fileNumber === "2"){
  //File 2 dexterity up
  if (MP2 >= 15){
  if (controlsLocked === false){
    console.log("dexterity up");
    controlsLocked = true;
    dexterity2 = dexterity2 + 20;
    MP2 = MP2 - 15;
    console.log(MP2 + " MP left");
    enemyAttack2();
  };
  }
  else{console.log("Not enough MP.")};
  }
  else if (fileNumber === "3"){
  //File 3 block
  if (MP3 >= 12){
  if (controlsLocked === false){
    console.log("dexterity up");
    controlsLocked = true;
    dexterity3 = dexterity3 + 20;
    MP3 = MP3 - 15;
    console.log(MP3 + " MP left");
    enemyAttack1();
  };
  }
  else{console.log("Not enough MP.")};
  }
  else {
    console.log("Controls are locked");
  };
  };
  //End of cut dexterity up function

//End of magic function

//--------------------------------------------------------------------------------------------------------------------------------------------------

//Shop and items
  //Item constructor
  function Item(name, price, power, description) {
    this.itemName = name;
    this.itemPrice = price;
    this.itemPower = power;
    this.itemDescription = description;
  };

  //All items
  const item1 = new Item("Health Potion", 100, 10, "Restores 10 points of HP");
  const item2 = new Item("Magic Potion", 150, 10, "Restores 10 points of MP");
  const item3 = new Item("Special Potion", 125, 10, "Restores 10 points of SP");

  let allItems = [item1, item2, item3];

  //Shop function
  //Function to display the shop
  function viewShop(){
    if (shopDisplay === false){
      document.getElementById("shopContainer").style.display = "block";
      document.getElementById("shopButton").innerHTML = "Close Shop";
      shopDisplay = true;
    }
    else if (shopDisplay === true){
      document.getElementById("shopContainer").style.display = "none";
      document.getElementById("shopButton").innerHTML = "Open Shop";
      shopDisplay = false;
    };
  };

  //Function to buy health potions
  function buyHpPotion(){
    console.log("bought HP potion");
    if (fileNumber === "1"){
     if (money1 >= 100){
      money1 = money1 - 100;
      localStorage.setItem("money1", money1);
      money1 = parseInt(localStorage.getItem("money1"));
      stuff1 = stuffParse1;
      if (stuff1 === null){
        stuff1 = [];
        stuff1.push(item1);
        localStorage.setItem("inventory1", JSON.stringify(stuff1));
        inventory1 = localStorage.getItem("inventory1");
        stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
        console.log(stuffParse1);
        let node = document.createElement("button");
        node.setAttribute("id", "item" + i);
        i++;
        console.log(i);
        node.addEventListener('click', function(){useItem(this.id);}, false);
        let textnode = document.createTextNode("Item: Health Potion | Item Power: 10 | Item Description: Restores 10 points of HP");
        node.appendChild(textnode);
        document.getElementById("inventory").appendChild(node);
      }
      else{
      stuff1.push(item1);
      localStorage.setItem("inventory1", JSON.stringify(stuff1));
      inventory1 = localStorage.getItem("inventory1");
      stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
      console.log(stuffParse1);
      let node = document.createElement("button");
      node.setAttribute("id", "item" + i);
      i++;
      console.log(i);
      node.addEventListener('click', function(){useItem(this.id);}, false);
      let textnode = document.createTextNode("Item: Health Potion | Item Power: 10 | Item Description: Restores 10 points of HP");
      node.appendChild(textnode);
      document.getElementById("inventory").appendChild(node);
      };
     }
     else {
       console.log("Not enoough money.")
     };
    }
    else if (fileNumber === "2"){
      if (money2 >= 100){
        money2 = money2 - 100;
        localStorage.setItem("money2", money2);
        money2 = parseInt(localStorage.getItem("money2"));
        stuff2 = stuffParse2;
        if (stuff2 === null){
          stuff2 = [];
          stuff2.push(item1);
          localStorage.setItem("inventory2", JSON.stringify(stuff2));
          inventory2 = localStorage.getItem("inventory2");
          stuffParse2 = JSON.parse(localStorage.getItem("inventory2"));
          console.log(stuffParse2);
          let node = document.createElement("button");
          node.setAttribute("id", "item" + i);
          i++;
          node.addEventListener('click', function(){useItem(this.id);}, false);
          let textnode = document.createTextNode("Item: Health Potion | Item Power: 10 | Item Description: Restores 10 points of HP");
          node.appendChild(textnode);
          document.getElementById("inventory").appendChild(node);
        }
        else{
        stuff2.push(item1);
        localStorage.setItem("inventory2", JSON.stringify(stuff2));
        inventory2 = localStorage.getItem("inventory2");
        stuffParse2 = JSON.parse(localStorage.getItem("inventory2"));
        console.log(stuffParse2);
        let node = document.createElement("button");
        node.setAttribute("id", "item" + i);
        i++;
        node.addEventListener('click', function(){useItem(this.id);}, false);
        let textnode = document.createTextNode("Item: Health Potion | Item Power: 10 | Item Description: Restores 10 points of HP");
        node.appendChild(textnode);
        document.getElementById("inventory").appendChild(node);
        };
       }
       else {
         console.log("Not enoough money.")
       };
    }
    else if (fileNumber === "3"){
      if (money3 >= 100){
        money3 = money3 - 100;
        localStorage.setItem("money3", money3);
        money3 = parseInt(localStorage.getItem("money3"));
        stuff3 = stuffParse3;
        if (stuff3 === null){
          stuff3 = [];
          stuff3.push(item1);
          localStorage.setItem("inventory3", JSON.stringify(stuff3));
          inventory3 = localStorage.getItem("inventory3");
          stuffParse3 = JSON.parse(localStorage.getItem("inventory3"));
          console.log(stuffParse3);
          let node = document.createElement("button");
          node.setAttribute("id", "item" + i);
          i++;
          node.addEventListener('click', function(){useItem(this.id);}, false);
          let textnode = document.createTextNode("Item: Health Potion | Item Power: 10 | Item Description: Restores 10 points of HP");
          node.appendChild(textnode);
          document.getElementById("inventory").appendChild(node);
        }
        else{
        stuff3.push(item1);
        localStorage.setItem("inventory3", JSON.stringify(stuff3));
        inventory3 = localStorage.getItem("inventory3");
        stuffParse3 = JSON.parse(localStorage.getItem("inventory3"));
        console.log(stuffParse3);
        let node = document.createElement("button");
        node.setAttribute("id", "item" + i);
        i++;
        node.addEventListener('click', function(){useItem(this.id);}, false);
        let textnode = document.createTextNode("Item: Health Potion | Item Power: 10 | Item Description: Restores 10 points of HP");
        node.appendChild(textnode);
        document.getElementById("inventory").appendChild(node);
        };
       }
       else {
         console.log("Not enoough money.")
       };
    };
  };

  //Function to buy magic potions
  function buyMpPotion(){
    console.log("bought MP potion");
    if (fileNumber === "1"){
     if (money1 >= 150){
      money1 = money1 - 150;
      localStorage.setItem("money1", money1);
      money1 = parseInt(localStorage.getItem("money1"));
      stuff1 = stuffParse1;
      if (stuff1 === null){
        stuff1 = [];
        stuff1.push(item2);
        localStorage.setItem("inventory1", JSON.stringify(stuff1));
        inventory1 = localStorage.getItem("inventory1");
        stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
        console.log(stuffParse1);
        let node = document.createElement("button");
        node.setAttribute("id", "item" + i);
        i++;
        node.addEventListener('click', function(){useItem(this.id);}, false);
        let textnode = document.createTextNode("Item: Magic Potion | Item Power: 10 | Item Description: Restores 10 points of MP");
        node.appendChild(textnode);
        document.getElementById("inventory").appendChild(node);
      }
      else{
      stuff1.push(item2);
      localStorage.setItem("inventory1", JSON.stringify(stuff1));
      inventory1 = localStorage.getItem("inventory1");
      stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
      console.log(stuffParse1);
      let node = document.createElement("button");
      node.setAttribute("id", "item" + i);
      i++;
      node.addEventListener('click', function(){useItem(this.id);}, false);
      let textnode = document.createTextNode("Item: Magic Potion | Item Power: 10 | Item Description: Restores 10 points of MP");
      node.appendChild(textnode);
      document.getElementById("inventory").appendChild(node);
      };
     }
     else {
       console.log("Not enoough money.")
     };
    }
    else if (fileNumber === "2"){
      if (money2 >= 150){
        money2 = money2 - 150;
        localStorage.setItem("money2", money2);
        money2 = parseInt(localStorage.getItem("money2"));
        stuff2 = stuffParse2;
        if (stuff2 === null){
          stuff2 = [];
          stuff2.push(item2);
          localStorage.setItem("inventory2", JSON.stringify(stuff2));
          inventory2 = localStorage.getItem("inventory2");
          stuffParse2 = JSON.parse(localStorage.getItem("inventory2"));
          console.log(stuffParse2);
          let node = document.createElement("button");
          node.setAttribute("id", "item" + i);
          i++;
          node.addEventListener('click', function(){useItem(this.id);}, false);
          let textnode = document.createTextNode("Item: Magic Potion | Item Power: 10 | Item Description: Restores 10 points of MP");
          node.appendChild(textnode);
          document.getElementById("inventory").appendChild(node);
        }
        else{
        stuff2.push(item2);
        localStorage.setItem("inventory2", JSON.stringify(stuff2));
        inventory2 = localStorage.getItem("inventory2");
        stuffParse2 = JSON.parse(localStorage.getItem("inventory2"));
        console.log(stuffParse2);
        let node = document.createElement("button");
        node.setAttribute("id", "item" + i);
        i++;
        node.addEventListener('click', function(){useItem(this.id);}, false);
        let textnode = document.createTextNode("Item: Magic Potion | Item Power: 10 | Item Description: Restores 10 points of MP");
        node.appendChild(textnode);
        document.getElementById("inventory").appendChild(node);
        };
       }
       else {
         console.log("Not enoough money.")
       };
    }
    else if (fileNumber === "3"){
      if (money3 >= 150){
        money3 = money3 - 150;
        localStorage.setItem("money3", money3);
        money3 = parseInt(localStorage.getItem("money3"));
        stuff3 = stuffParse3;
        if (stuff3 === null){
          stuff3 = [];
          stuff3.push(item2);
          localStorage.setItem("inventory3", JSON.stringify(stuff3));
          inventory3 = localStorage.getItem("inventory3");
          stuffParse3 = JSON.parse(localStorage.getItem("inventory3"));
          console.log(stuffParse3);
          let node = document.createElement("button");
          node.setAttribute("id", "item" + i);
          i++;
          node.addEventListener('click', function(){useItem(this.id);}, false);
          let textnode = document.createTextNode("Item: Magic Potion | Item Power: 10 | Item Description: Restores 10 points of MP");
          node.appendChild(textnode);
          document.getElementById("inventory").appendChild(node);
        }
        else{
        stuff3.push(item2);
        localStorage.setItem("inventory3", JSON.stringify(stuff3));
        inventory3 = localStorage.getItem("inventory3");
        stuffParse3 = JSON.parse(localStorage.getItem("inventory3"));
        console.log(stuffParse3);
        let node = document.createElement("button");
        node.setAttribute("id", "item" + i);
        i++;
        node.addEventListener('click', function(){useItem(this.id);}, false);
        let textnode = document.createTextNode("Item: Magic Potion | Item Power: 10 | Item Description: Restores 10 points of MP");
        node.appendChild(textnode);
        document.getElementById("inventory").appendChild(node);
        };
       }
       else {
         console.log("Not enoough money.")
       };
    };
  };

    //Function to buy special potions
    function buySpPotion(){
      console.log("bought SP potion");
      if (fileNumber === "1"){
       if (money1 >= 125){
        money1 = money1 - 125;
        localStorage.setItem("money1", money1);
        money1 = parseInt(localStorage.getItem("money1"));
        stuff1 = stuffParse1;
        if (stuff1 === null){
          stuff1 = [];
          stuff1.push(item3);
          localStorage.setItem("inventory1", JSON.stringify(stuff1));
          inventory1 = localStorage.getItem("inventory1");
          stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
          console.log(stuffParse1);
          let node = document.createElement("button");
          node.setAttribute("id", "item" + i);
          i++;
          node.addEventListener('click', function(){useItem(this.id);}, false);
          let textnode = document.createTextNode("Item: Special Potion | Item Power: 10 | Item Description: Restores 10 points of SP");
          node.appendChild(textnode);
          document.getElementById("inventory").appendChild(node);
        }
        else{
        stuff1.push(item3);
        localStorage.setItem("inventory1", JSON.stringify(stuff1));
        inventory1 = localStorage.getItem("inventory1");
        stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
        console.log(stuffParse1);
        let node = document.createElement("button");
        node.setAttribute("id", "item" + i);
        i++;
        node.addEventListener('click', function(){useItem(this.id);}, false);
        let textnode = document.createTextNode("Item: Special Potion | Item Power: 10 | Item Description: Restores 10 points of SP");
        node.appendChild(textnode);
        document.getElementById("inventory").appendChild(node);
        };
       }
       else {
         console.log("Not enoough money.")
       };
      }
      else if (fileNumber === "2"){
        if (money2 >= 125){
          money2 = money2 - 125;
          localStorage.setItem("money2", money2);
          money2 = parseInt(localStorage.getItem("money2"));
          stuff2 = stuffParse2;
          if (stuff2 === null){
            stuff2 = [];
            stuff2.push(item3);
            localStorage.setItem("inventory2", JSON.stringify(stuff2));
            inventory2 = localStorage.getItem("inventory2");
            stuffParse2 = JSON.parse(localStorage.getItem("inventory2"));
            console.log(stuffParse2);
            let node = document.createElement("button");
            node.setAttribute("id", "item" + i);
            i++;
            node.addEventListener('click', function(){useItem(this.id);}, false);
            let textnode = document.createTextNode("Item: Special Potion | Item Power: 10 | Item Description: Restores 10 points of SP");
            node.appendChild(textnode);
            document.getElementById("inventory").appendChild(node);
          }
          else{
          stuff2.push(item3);
          localStorage.setItem("inventory2", JSON.stringify(stuff2));
          inventory2 = localStorage.getItem("inventory2");
          stuffParse2 = JSON.parse(localStorage.getItem("inventory2"));
          console.log(stuffParse2);
          let node = document.createElement("button");
          node.setAttribute("id", "item" + i);
          i++;
          node.addEventListener('click', function(){useItem(this.id);}, false);
          let textnode = document.createTextNode("Item: Special Potion | Item Power: 10 | Item Description: Restores 10 points of SP");
          node.appendChild(textnode);
          document.getElementById("inventory").appendChild(node);
          };
         }
         else {
           console.log("Not enoough money.")
         };
      }
      else if (fileNumber === "3"){
        if (money3 >= 125){
          money3 = money3 - 125;
          localStorage.setItem("money3", money3);
          money3 = parseInt(localStorage.getItem("money3"));
          stuff3 = stuffParse3;
          if (stuff3 === null){
            stuff3 = [];
            stuff3.push(item3);
            localStorage.setItem("inventory3", JSON.stringify(stuff3));
            inventory3 = localStorage.getItem("inventory3");
            stuffParse3 = JSON.parse(localStorage.getItem("inventory3"));
            console.log(stuffParse3);
            let node = document.createElement("button");
            node.setAttribute("id", "item" + i);
            i++;
            node.addEventListener('click', function(){useItem(this.id);}, false);
            let textnode = document.createTextNode("Item: Special Potion | Item Power: 10 | Item Description: Restores 10 points of SP");
            node.appendChild(textnode);
            document.getElementById("inventory").appendChild(node);
          }
          else{
          stuff3.push(item3);
          localStorage.setItem("inventory3", JSON.stringify(stuff3));
          inventory3 = localStorage.getItem("inventory3");
          stuffParse3 = JSON.parse(localStorage.getItem("inventory3"));
          console.log(stuffParse3);
          let node = document.createElement("button");
          node.setAttribute("id", "item" + i);
          i++;
          node.addEventListener('click', function(){useItem(this.id);}, false);
          let textnode = document.createTextNode("Item: Special Potion | Item Power: 10 | Item Description: Restores 10 points of SP");
          node.appendChild(textnode);
          document.getElementById("inventory").appendChild(node);
          };
         }
         else {
           console.log("Not enoough money.")
         };
      };
    };

console.log(stuffParse1.length);

//Display all items into inventory before battle
let i = 0;
for (i = 0; i < stuffParse1.length; i++) {
  let node = document.createElement("button");
  node.setAttribute("id", "item" + i);
  node.addEventListener('click', function(){useItem(this.id);}, false);
  let textnode = document.createTextNode("Item: " + stuffParse1[i].itemName + " | Item Power: " + stuffParse1[i].itemPower + " | Item Description: " + stuffParse1[i].itemDescription);
  node.appendChild(textnode);
  document.getElementById("inventory").appendChild(node);
};

function displayInventory(){
  if (inventoryDisplay === false){
    document.getElementById("inventory").style.display = "block";
    inventoryDisplay = true;
    document.getElementById("inventoryDisplayer").innerHTML = "Close Inventory";
  }
  else if (inventoryDisplay === true){
    document.getElementById("inventory").style.display = "none";
    inventoryDisplay = false;
    document.getElementById("inventoryDisplayer").innerHTML = "Open Inventory";
  };
};

//Function for using an item
let adjuster = 0;
let statToIncrease;
let statIncreaseValue;
function useItem(itemId){
  if (controlsLocked === false){
  //How to find what item was clicked
  // console.log(itemId);
  //Find the number of the item clicked
  let index;
  if(itemId.length === 5){
    index = (itemId.slice(-1))-adjuster;
    console.log("adjuster is " + adjuster);
    console.log(index);
  }
  else if(itemId.length === 6){
    index = itemId.slice(-2);
    index = (itemId.slice(-1))-adjuster;
    console.log("adjuster is " + adjuster);
    console.log(index);
  }
  else if(itemId.length === 7){
    index = itemId.slice(-3);
    index = (itemId.slice(-1))-adjuster;
  }
  else if(itemId.length === 8){
    index = itemId.slice(-4);
    index = (itemId.slice(-1))-adjuster;
  }
  else if(itemId.length === 9){
    index = itemId.slice(-5);
    index = (itemId.slice(-1))-adjuster;
  };
  adjuster = adjuster + 1;

  //Removing the item from local storage
        stuff1 = stuffParse1;
        stuff1.splice(index,1);
        localStorage.setItem("inventory1", JSON.stringify(stuff1));
        inventory1 = localStorage.getItem("inventory1");
        stuffParse1 = JSON.parse(localStorage.getItem("inventory1"));
        console.log(stuffParse1);

        // How to determine what item was clicked
          statToIncrease = document.getElementById(itemId).innerHTML.slice(-2);
        // How to determine how much value to give to the player
          statIncreaseValue = parseInt(document.getElementById(itemId).innerHTML.slice(-15,-13));

          
          if (statToIncrease === "HP"){
            console.log("increase HP");
            if (fileNumber === "1"){
              if (HP1 >= (maxHP1-statIncreaseValue)){
                HP1 = maxHP1;
                localStorage.setItem("HP1", HP1);
              }
              else {
                HP1 = HP1 + statIncreaseValue;
                localStorage.setItem("HP1", HP1);
              };
              console.log("HP increased by " + statIncreaseValue);
            }
            else if (fileNumber === "2"){
                if (HP2 >= (maxHP2-statIncreaseValue)){
                  HP2 = maxHP2;
                  localStorage.setItem("HP2", HP2);
                }
                else {
                  HP2 = HP2 + statIncreaseValue;
                  localStorage.setItem("HP2", HP2);
                };
                console.log("HP increased by " + statIncreaseValue);
            }
            else if (fileNumber === "3"){
                if (HP3 >= (maxHP3-statIncreaseValue)){
                  HP3 = maxHP3;
                  localStorage.setItem("HP3", HP3);
                }
                else {
                  HP3 = HP3 + statIncreaseValue;
                  localStorage.setItem("HP3", HP3);
                };
                console.log("HP increased by " + statIncreaseValue);
            };
          }
          else if (statToIncrease === "MP"){
            console.log("increase MP");
            if (fileNumber === "1"){
              if (MP1 >= (maxMP1-statIncreaseValue)){
                MP1 = maxMP1;
                localStorage.setItem("MP1", MP1);
              }
              else {
                MP1 = MP1 + statIncreaseValue;
                localStorage.setItem("MP1", MP1);
              };
              console.log("MP increased by " + statIncreaseValue);
            }
            else if (fileNumber === "2"){
                if (MP2 >= (maxMP2-statIncreaseValue)){
                  MP2 = maxMP2;
                  localStorage.setItem("MP2", MP2);
                }
                else {
                  MP2 = MP2 + statIncreaseValue;
                  localStorage.setItem("MP2", MP2);
                };
                console.log("MP increased by " + statIncreaseValue);
            }
            else if (fileNumber === "3"){
                if (MP3 >= (maxMP3-statIncreaseValue)){
                  MP3 = maxMP3;
                  localStorage.setItem("MP3", MP3);
                }
                else {
                  MP3 = MP3 + statIncreaseValue;
                  localStorage.setItem("MP3", MP3);
                };
                console.log("MP increased by " + statIncreaseValue);
            };
          }
          else if (statToIncrease === "SP"){
            console.log("increase SP");
            if (fileNumber === "1"){
              if (SP1 >= (maxSP1-statIncreaseValue)){
                SP1 = maxSP1;
                localStorage.setItem("SP1", SP1);
              }
              else {
                SP1 = SP1 + statIncreaseValue;
                localStorage.setItem("SP1", SP1);
              };
              console.log("SP increased by " + statIncreaseValue);
            }
            else if (fileNumber === "2"){
                if (SP2 >= (maxSP2-statIncreaseValue)){
                  SP2 = maxSP2;
                  localStorage.setItem("SP2", SP2);
                }
                else {
                  SP2 = SP2 + statIncreaseValue;
                  localStorage.setItem("SP2", SP2);
                };
                console.log("SP increased by " + statIncreaseValue);
            }
            else if (fileNumber === "3"){
                if (SP3 >= (maxSP3-statIncreaseValue)){
                  SP3 = maxSP3;
                  localStorage.setItem("SP3", SP3);
                }
                else {
                  SP3 = SP3 + statIncreaseValue;
                  localStorage.setItem("SP3", SP3);
                };
                console.log("SP increased by " + statIncreaseValue);
            };
          };
  document.getElementById(itemId).remove();
  controlsLocked = true;
  enemyAttack1();
        }
        else {
          console.log("Controls still locked")
        };
};
//End of items functions end here

//-------------------------------------------------------------------------------------------------------------------------------------------

//Skills functions begin here
function viewSkills(){
  if (skillsDisplay === false){
    document.getElementById("skillsContainer").style.display = "block";
    document.getElementById("skillsButton").innerHTML = "Close Skills";
    skillsDisplay = true;
  }
  else if (skillsDisplay === true){
    document.getElementById("skillsContainer").style.display = "none";
    document.getElementById("skillsButton").innerHTML = "Open Skills";
    skillsDisplay = false;
  };
};

//points for increasing stats
let points = 3;
let preMaxHP;
function levelUp(){
 if (fileNumber === "1"){
  if (exp1 >= expNeeded1){
  document.getElementById("levelUpScreen").style.display = "block";
  document.getElementById("playerMaxHP").innerHTML = localStorage.getItem("maxHP1");
  document.getElementById("playerMaxMP").innerHTML = localStorage.getItem("maxMP1");
  document.getElementById("playerMaxSP").innerHTML = localStorage.getItem("maxSP1");
  document.getElementById("playerATK").innerHTML = localStorage.getItem("attack1");
  document.getElementById("playerDEF").innerHTML = localStorage.getItem("defense1");
  document.getElementById("playerMagic").innerHTML = localStorage.getItem("magic1");
  document.getElementById("playerDexterity").innerHTML = localStorage.getItem("dexterity1");
  preMaxHP = localStorage.getItem("maxHP1");
  preMaxMP = localStorage.getItem("maxMP1");
  preMaxSP = localStorage.getItem("maxSP1");
  preMaxATK = localStorage.getItem("attack1");
  preMaxDEF = localStorage.getItem("defense1");
  preMaxMagic = localStorage.getItem("magic1");
  preMaxDexterity = localStorage.getItem("dexterity1");
  }
  else{
    console.log('not enough exp.');
  };
 }
 else if (fileNumber === "2"){
  if (exp2 >= expNeeded2){  
  document.getElementById("levelUpScreen").style.display = "block";
  document.getElementById("playerMaxHP").innerHTML = localStorage.getItem("maxHP2");
  document.getElementById("playerMaxMP").innerHTML = localStorage.getItem("maxMP2");
  document.getElementById("playerMaxSP").innerHTML = localStorage.getItem("maxSP2");
  document.getElementById("playerATK").innerHTML = localStorage.getItem("attack2");
  document.getElementById("playerDEF").innerHTML = localStorage.getItem("defense2");
  document.getElementById("playerMagic").innerHTML = localStorage.getItem("magic2");
  document.getElementById("playerDexterity").innerHTML = localStorage.getItem("dexterity2");
  preMaxHP = localStorage.getItem("maxHP2");
  preMaxMP = localStorage.getItem("maxMP2");
  preMaxSP = localStorage.getItem("maxSP2");
  preMaxATK = localStorage.getItem("attack2");
  preMaxDEF = localStorage.getItem("defense2");
  preMaxMagic = localStorage.getItem("magic2");
  preMaxDexterity = localStorage.getItem("dexterity2");
  }
  else{
    console.log('not enough exp.');
  };
 }
 else if (fileNumber === "3"){
  if (exp3 >= expNeeded3){
  document.getElementById("levelUpScreen").style.display = "block";
  document.getElementById("playerMaxHP").innerHTML = localStorage.getItem("maxHP3");
  document.getElementById("playerMaxMP").innerHTML = localStorage.getItem("maxMP3");
  document.getElementById("playerMaxSP").innerHTML = localStorage.getItem("maxSP3");
  document.getElementById("playerATK").innerHTML = localStorage.getItem("attack3");
  document.getElementById("playerDEF").innerHTML = localStorage.getItem("defense3");
  document.getElementById("playerMagic").innerHTML = localStorage.getItem("magic3");
  document.getElementById("playerDexterity").innerHTML = localStorage.getItem("dexterity3");
  preMaxHP = localStorage.getItem("maxHP3");
  preMaxMP = localStorage.getItem("maxMP3");
  preMaxSP = localStorage.getItem("maxSP3");
  preMaxATK = localStorage.getItem("attack3");
  preMaxDEF = localStorage.getItem("defense3");
  preMaxMagic = localStorage.getItem("magic3");
  preMaxDexterity = localStorage.getItem("dexterity3");
  }
  else{
    console.log('not enough exp.');
  };
 };
};

function completeLevelUp(){
 if(points === 0){ 
    document.getElementById("levelUpScreen").style.display = "none";
  if(fileNumber === "1"){
    exp1 = exp1 - expNeeded;
    localStorage.setItem("expOne", exp1);
    localStorage.setItem("lvlOne", lvl1+1);
    lvl1 = localStorage.getItem("lvlOne");
    localStorage.setItem("maxHP1", document.getElementById("playerMaxHP").innerHTML);
    maxHP1 = localStorage.getItem("maxHP1");
    localStorage.setItem("maxMP1", document.getElementById("playerMaxMP").innerHTML);
    maxMP1 = localStorage.getItem("maxMP1");
    localStorage.setItem("maxSP1", document.getElementById("playerMaxSP").innerHTML);
    maxSP1 = localStorage.getItem("maxSP1");
    localStorage.setItem("attack1", document.getElementById("playerATK").innerHTML);
    localStorage.setItem("defense1", document.getElementById("playerDEF").innerHTML);
    localStorage.setItem("magic1", document.getElementById("playerMagic").innerHTML);
    localStorage.setItem("dexterity1", document.getElementById("playerDexterity").innerHTML);
    expNeeded1=(((2075/2)*lvl1)-1875/2);
    localStorage.setItem("expNeeded1", expNeeded1);
    }
  else if(fileNumber === "2"){
    exp2 = exp2 - expNeeded;
    localStorage.setItem("expTwo", exp2);
    localStorage.setItem("lvlTwo", lvl2+1);
    lvl2 = localStorage.getItem("lvlTwo");
    localStorage.setItem("maxHP2", document.getElementById("playerMaxHP").innerHTML);
    maxHP2 = localStorage.getItem("maxHP2");
    localStorage.setItem("maxMP2", document.getElementById("playerMaxMP").innerHTML);
    maxMP2 = localStorage.getItem("maxMP2");
    localStorage.setItem("maxSP2", document.getElementById("playerMaxSP").innerHTML);
    maxSP2 = localStorage.getItem("maxSP2");
    localStorage.setItem("attack2", document.getElementById("playerATK").innerHTML);
    localStorage.setItem("defense2", document.getElementById("playerDEF").innerHTML);
    localStorage.setItem("magic2", document.getElementById("playerMagic").innerHTML);
    localStorage.setItem("dexterity2", document.getElementById("playerDexterity").innerHTML);
    expNeeded2=(((2075/2)*lvl1)-1875/2);
    localStorage.setItem("expNeeded2", expNeeded2);
  }
  else if(fileNumber === "3"){
    exp3 = exp3 - expNeeded;
    localStorage.setItem("expThree", exp3);
    localStorage.setItem("lvlThree", lvl3+1);
    lvl3 = localStorage.getItem("lvlThree");
    localStorage.setItem("maxHP3", document.getElementById("playerMaxHP").innerHTML);
    maxHP3 = localStorage.getItem("maxHP3");
    localStorage.setItem("maxMP3", document.getElementById("playerMaxMP").innerHTML);
    maxMP3 = localStorage.getItem("maxMP3");
    localStorage.setItem("maxSP3", document.getElementById("playerMaxSP").innerHTML);
    maxSP3 = localStorage.getItem("maxSP3");
    localStorage.setItem("attack3", document.getElementById("playerATK").innerHTML);
    localStorage.setItem("defense3", document.getElementById("playerDEF").innerHTML);
    localStorage.setItem("magic3", document.getElementById("playerMagic").innerHTML);
    localStorage.setItem("dexterity3", document.getElementById("playerDexterity").innerHTML);
    expNeeded3=(((2075/2)*lvl1)-1875/2);
    localStorage.setItem("expNeeded3", expNeeded3);
  };
  //Increase next about of xp needed to level up.
}
 else{
  console.log("Not all points have been assigned");
};
};

//Functions for choosing max hp after leveling up.
function incrementHP(){
 if (points > 0){
  document.getElementById("playerMaxHP").innerHTML = (parseInt(document.getElementById("playerMaxHP").innerHTML)) + 1;
  points = points - 1;
 }
 else{
   console.log("No points left");
 };
};
function decrementHP(){
  if ((parseInt(document.getElementById("playerMaxHP").innerHTML)) <= preMaxHP){
   console.log("Cannot decrease below starting value.")
  }
  else{
    document.getElementById("playerMaxHP").innerHTML = (parseInt(document.getElementById("playerMaxHP").innerHTML)) - 1;
   points = points + 1;
  };
 };

 //Functions for choosing max mp after leveling up.
function incrementMP(){
  if (points > 0){
   document.getElementById("playerMaxMP").innerHTML = (parseInt(document.getElementById("playerMaxMP").innerHTML)) + 1;
   points = points - 1;
  }
  else{
    console.log("No points left");
  };
 };
 function decrementMP(){
   if ((parseInt(document.getElementById("playerMaxMP").innerHTML)) <= preMaxMP){
    console.log("Cannot decrease below starting value.")
   }
   else{
     document.getElementById("playerMaxMP").innerHTML = (parseInt(document.getElementById("playerMaxMP").innerHTML)) - 1;
    points = points + 1;
   };
  };

   //Functions for choosing max sp after leveling up.
function incrementSP(){
  if (points > 0){
   document.getElementById("playerMaxSP").innerHTML = (parseInt(document.getElementById("playerMaxSP").innerHTML)) + 1;
   points = points - 1;
  }
  else{
    console.log("No points left");
  };
 };
 function decrementSP(){
   if ((parseInt(document.getElementById("playerMaxSP").innerHTML)) <= preMaxSP){
    console.log("Cannot decrease below starting value.")
   }
   else{
     document.getElementById("playerMaxSP").innerHTML = (parseInt(document.getElementById("playerMaxSP").innerHTML)) - 1;
    points = points + 1;
   };
  };

     //Functions for choosing max atk after leveling up.
function incrementATK(){
  if (points > 0){
   document.getElementById("playerATK").innerHTML = (parseInt(document.getElementById("playerATK").innerHTML)) + 1;
   points = points - 1;
  }
  else{
    console.log("No points left");
  };
 };
 function decrementATK(){
   if ((parseInt(document.getElementById("playerATK").innerHTML)) <= preMaxATK){
    console.log("Cannot decrease below starting value.")
   }
   else{
     document.getElementById("playerATK").innerHTML = (parseInt(document.getElementById("playerATK").innerHTML)) - 1;
    points = points + 1;
   };
  };

       //Functions for choosing max def after leveling up.
function incrementDEF(){
  if (points > 0){
   document.getElementById("playerDEF").innerHTML = (parseInt(document.getElementById("playerDEF").innerHTML)) + 1;
   points = points - 1;
  }
  else{
    console.log("No points left");
  };
 };
 function decrementDEF(){
   if ((parseInt(document.getElementById("playerDEF").innerHTML)) <= preMaxDEF){
    console.log("Cannot decrease below starting value.")
   }
   else{
     document.getElementById("playerDEF").innerHTML = (parseInt(document.getElementById("playerDEF").innerHTML)) - 1;
    points = points + 1;
   };
  };

       //Functions for choosing max magic after leveling up.
function incrementMagic(){
  if (points > 0){
   document.getElementById("playerMagic").innerHTML = (parseInt(document.getElementById("playerMagic").innerHTML)) + 1;
   points = points - 1;
  }
  else{
    console.log("No points left");
  };
 };
 function decrementMagic(){
   if ((parseInt(document.getElementById("playerMagic").innerHTML)) <= preMaxMagic){
    console.log("Cannot decrease below starting value.")
   }
   else{
     document.getElementById("playerMagic").innerHTML = (parseInt(document.getElementById("playerMagic").innerHTML)) - 1;
    points = points + 1;
   };
  };

       //Functions for choosing max dexterity after leveling up.
function incrementDexterity(){
  if (points > 0){
   document.getElementById("playerDexterity").innerHTML = (parseInt(document.getElementById("playerDexterity").innerHTML)) + 1;
   points = points - 1;
  }
  else{
    console.log("No points left");
  };
 };
 function decrementDexterity(){
   if ((parseInt(document.getElementById("playerDexterity").innerHTML)) <= preMaxDexterity){
    console.log("Cannot decrease below starting value.")
   }
   else{
     document.getElementById("playerDexterity").innerHTML = (parseInt(document.getElementById("playerDexterity").innerHTML)) - 1;
    points = points + 1;
   };
  };