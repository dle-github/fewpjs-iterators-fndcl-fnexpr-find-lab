function superbowlWin(r){
    console.log(r[1].result);
    const found = r.find( ({ result }) => result === 'W' );
    console.log(found)
    if (found){
        return found.year;
    } else return found;
}