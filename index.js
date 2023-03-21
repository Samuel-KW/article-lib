const averageWPM = 250;

function relativeTime(seconds) {

  if (seconds < 60)
    return parseInt(seconds) + 's';
  
  if (seconds < 3600) 
    return parseInt(seconds / 60) + 'm';
  
  return parseInt(seconds / 3600) + 'h';
}


