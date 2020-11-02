// connect to firebase db

import * as firebase from 'firebase';
import expenses from './../tests/fixtures/expenses';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default }


// // insert sample expenses
// expenses.map((expense) => {
//     database.ref('expenses').push({
//         description: expense.description,
//         amount: expense.amount,
//         note: expense.note, 
//         createdAt: expense.createdAt
//     })
// })


// database.ref('expenses').on('value', () => {
//     database.ref( 'expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const deezExpenses = [];
//         snapshot.forEach(childSnapshot => {
//             deezExpenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(deezExpenses)
//     })
// });

// const newExpense = {
//     id:'4',
//     description: 'pot',
//     amount: 420,
//     note: 'diggity dank',
//     createdAt: 345600000
// }

// database.ref('expenses').push({
//     ...newExpense
// });


// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });




// database.ref('newNotes').push({
//     title: 'todo',
//     body: 'nopers'
// })
