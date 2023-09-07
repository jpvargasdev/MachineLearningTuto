const utils = {};

utils.formatPercent = n => {
  return (n*100).toFixed(2) + "%";
}

utils.flaggedUsers = [
  1663882102141, 1663900040545, 1664485938220
];

utils.printProgress = (count, max) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  const percent = utils.formatPercent(
    count / max
  );

  process.stdout.write(
    count+"/"+max+" ("+percent+")"
  );
}

utils.groupBy = (objArray, key) => {
  const groups = {};
  for(let obj of objArray) {
    const val = obj[key];
    if (!groups[val]) {
      groups[val] = [];
    }
    groups[val].push(obj);
  }

  return groups;
}

utils.styles = {
   car:{color:'gray',text:'🚗'},
   fish:{color:'red',text:'🐠'},
   house:{color:'yellow',text:'🏠'},
   tree:{color:'green',text:'🌳'},
   bicycle:{color:'cyan',text:'🚲'},
   guitar:{color:'blue',text:'🎸'},
   pencil:{color:'magenta',text:'✏️'},
   clock:{color:'lightgray',text:'🕒'},
};

if(typeof module!=='undefined') {
  module.exports=utils;
}
