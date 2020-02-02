//File number
let fileNumber = localStorage.getItem("fileNumber");
//lock for controls, mainly used in battle;
let controlsLocked = false;
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
//Record number of enemies defeated in battles
let enemiesDefeated1 = localStorage.getItem("enemiesDefeated1");
let enemiesDefeated2 = localStorage.getItem("enemiesDefeated2");
let enemiesDefeated3 = localStorage.getItem("enemiesDefeated3");
//Record what initial player type is
let playerType1 = localStorage.getItem("playerType1");
let playerType2 = localStorage.getItem("playerType2");
let playerType3 = localStorage.getItem("playerType3");
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
// stuff1.push(item);
// stuffValue1.push(itemValue);
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
//Holder for current enemy when the player gets into battle
let currentEnemy = localStorage.getItem("currentEnemy");
//rng value used fpr determining enemy that you will fight in a random battle
let rng = localStorage.getItem("currentEnemy");

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
    window.location = "battle";
  };

  //Battle script

  function Enemy(name, lvl, hp, atk, def, mp, lore) {
    this.enemyName = name
    this.enemyLvl = lvl;
    this.enemyHp = hp;
    this.enemyAtk = atk;
    this.enemyDef = def;
    this.enemyMp = mp;
    this.enemyLore = lore;
  };

  //All enemies go here, must have enough enemies to be 5 lvls higher than what the player can reach
  const enemy1 = new Enemy("John", 1, 10, 1, 0, 5, "John lore goes here");
  const enemy2 = new Enemy("Bob", 2, 12, 2, 0, 5, "Bob lore goes here");
  const enemy3 = new Enemy("George", 3, 12, 1, 0, 10, "George lore goes here");
  const enemy4 = new Enemy("Nolan", 4, 15, 1, 1, 5, "Nolan lore goes here");
  const enemy5 = new Enemy("Dan", 5, 15, 2, 1, 0, "Dan lore goes here");

  let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];

  //How to select random enemy
  console.log(allEnemies[parseInt(rng)]);

  let opponentName = allEnemies[parseInt(rng)].enemyName;
  let opponentLvl = allEnemies[parseInt(rng)].enemyLvl;
  let opponentHp = allEnemies[parseInt(rng)].enemyHp;
  let opponentAtk = allEnemies[parseInt(rng)].enemyAtk;
  let opponentDef = allEnemies[parseInt(rng)].enemyDef;
  let opponentMp = allEnemies[parseInt(rng)].enemyMp;
  let opponentLore = allEnemies[parseInt(rng)].enemyLore;
  console.log(opponentName);
  console.log(opponentLvl);
  console.log(opponentHp);
  console.log(opponentAtk);
  console.log(opponentDef);
  console.log(opponentMp);
  console.log(opponentLore);

  //function for when you attempt a standard attack
  function attack(){
   if (controlsLocked === false){
    //First lock the controls until everything is done
    controlsLocked = true;
    //determine chance to hit the enemy based on your dexterity
    let hitChance = (.15 * parseInt(dexterity1)) + 80;
    console.log(hitChance);
    //generate a random number to see if you hit the enemy
    let hitAttempt = Math.random() * 100;
    console.log(hitAttempt);
    //logic to determine if yoy hit the enemy
    if (hitChance > hitAttempt){
      //deal damage to the enemy based on your attack and the enemies defense if you hit
      opponentHp = opponentHp - (parseInt(attack1) - opponentDef);
      console.log(opponentHp);

      //Insert function here to check if the enemy has been defeated
      if (opponentHp > 0){
        console.log("enemy is still alive");
        //Insert enemy attack function here
        setTimeout(function(){
          console.log("enemy attack timer test");
          //Unlock controls after the enemy has completed their attack turn
          controlsLocked = false;
          console.log("controls unlocked");
        }, 3000);
      }
      else if (opponentHp <= 0){
        console.log("enemy is dead");
        //insert end battle function here
      };
    }
    else {
      console.log("miss");
      controlsLocked = false;
      console.log("controls unlocked");
    };
   }
   else {
     console.log("Controls are locked because the battle is over.");
   };
  };