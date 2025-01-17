const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 8;
        break;
      case 'wednesday':
        return 1;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 8;
        break;
      default:
        return 'error';
    }
  };
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  console.log(getSleepHours('monday'));
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
     let idealHours = 8;
     return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } 
    else if(actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than needed.');
  } 
    else if(actualSleepHours < idealSleepHours) {
    console.log('You should get some rest beacause you slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week.');
  } else {
    console.log('error');
  }
  };
  
  
  calculateSleepDebt()
  