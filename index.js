const averageWPM = 250;

/*
 * Converts a time in seconds to a convenient human readable relative time
 */
const getRelativeTime = seconds => {

  if (seconds < 60)
    return parseInt(seconds) + ' sec';
  
  if (seconds < 3600) 
    return parseInt(seconds / 60) + ' min';
  
  return parseInt(seconds / 3600) + ' hour';
};

/*
 * Estimates the time to read the content of an HTML element
 */
const getReadingTime = elem => {
  const content = elem.textContent.split(' ');
  const wpm = content.length / averageWPM;
  
  return getRelativeTime(wpm * 60) + ' read';
};

