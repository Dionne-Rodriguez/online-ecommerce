

const {
    VUE_APP_FIREBASE_API_KEY,
    VUE_APP_FIREBASE_APP_ID ,
    VUE_APP_FIREBASE_AUTH_DOMAIN ,
    VUE_APP_FIREBASE_MEASUREMENT_ID ,
    VUE_APP_FIREBASE_MESSAGE_SENDER_ID ,
    VUE_APP_FIREBASE_PROJECT_ID ,
    VUE_APP_FIREBASE_STORAGE_BUCKET
} = process.env
const firebaseConfig =  {
    apiKey: VUE_APP_FIREBASE_API_KEY,
    authDomain: VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: VUE_APP_FIREBASE_APP_ID,
    measurementId: VUE_APP_FIREBASE_MEASUREMENT_ID
}

module.exports = {
    firebaseConfig
}