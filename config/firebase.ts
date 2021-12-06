const devConfig = {
    apiKey: "AIzaSyB_JrJtg4oJr8hXu7b69zHexNtpIz5Cx1M",
    authDomain: "moneymanager-28b49.firebaseapp.com",
    projectId: "moneymanager-28b49",
    storageBucket: "moneymanager-28b49.appspot.com",
    messagingSenderId: "651264744261",
    appId: "1:651264744261:web:dfc8720bd6f71c00dffc2c"
};

const prodConfig = {

};

export default process.env.NODE_ENV === "production" ? prodConfig : devConfig;