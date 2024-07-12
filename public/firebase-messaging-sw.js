importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAVOqm2RjCokn1aAgXs85hxupmyVWNA-cQ",
  authDomain: "imageupdatedb.firebaseapp.com",
  projectId: "imageupdatedb",
  storageBucket: "imageupdatedb.appspot.com",
  messagingSenderId: "640036381047",
  appId: "1:640036381047:web:13ba29c6b5c7ba260b8172",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
