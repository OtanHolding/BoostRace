// 🔥 Подключение Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, push, set, remove, update, onValue } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// 🔥 Конфигурация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAe60jFUBBzI_3FpBihL-Vf45cQG14sx8",
    authDomain: "balalife-crm-application.firebaseapp.com",
    databaseURL: "https://balalife-crm-application-default-rtdb.firebaseio.com",
    projectId: "balalife-crm-application",
    storageBucket: "balalife-crm-application.appspot.com",
    messagingSenderId: "630645094153",
    appId: "1:630645094153:web:99bf08136f6a10a2b2c5d8"
};

// 🛠 Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Делаем доступным глобально
window.db = db;
window.ref = ref;
window.update = update;
