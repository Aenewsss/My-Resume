const { database, ref, set, get, child } = require('../config/firebase');

const reference = ref(database, 'career/');

class Career{
    setCareer(career){
        set(reference, {
            career: career
        })
        .then(() => console.log('Career set in DB'))
        .catch(e => console.error('Error to set career in DB', e));
    }

    getCareer(){
        get(child(reference, 'career')).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}

module.exports = new Career();