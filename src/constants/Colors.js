const COLORS = {
    primary : [] 
}




function AppColors() {
  let darkmode = false;
  this.setDarkMode = (bool) => (darkmode = bool);

  this.get = (colorkey) =>
    darkmode ? COLORS[colorkey][0] : APP_COLORS[colorkey][1]; //0 : lightmode , 1 : dark mode
}



export const APP_COLORS = new AppColors()