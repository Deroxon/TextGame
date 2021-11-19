function CheckPlayerStatus(hero) {
    if(hero.stats.healthPoints > 0 ) {
        return true
    }
    else {
        return false
    }
}


export default CheckPlayerStatus