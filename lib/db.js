import firebase from "./firebase";


const firestore = firebase.firestore();

export function createUser(uid,data){
    console.log(uid)
    console.log(data)
    return firestore.collection('users')
        .doc(uid)
        .set({uid,...data}, {merge: true});
}
