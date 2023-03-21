const averageWPM = 250;

const getRelativeTime = seconds => {

  if (seconds < 60)
    return parseInt(seconds) + ' sec';
  
  if (seconds < 3600) 
    return parseInt(seconds / 60) + ' min';
  
  return parseInt(seconds / 3600) + ' hour';
};

const getReadingTime = elem => {
  const content = elem.textContent.split(' ');
  const wpm = content.length / averageWPM;
  
  return getRelativeTime(wpm * 60) + ' read';
};

