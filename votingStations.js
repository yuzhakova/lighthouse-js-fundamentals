const chooseStations = function(stations) {
  let goodStations = [];
  for(const station of stations) {
    if(station[1] >= 20) {
      if(station[2] === 'community centre' || station[2] === 'school') {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}
