import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'
import firebase from 'firebase/app'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        imeis: [],
        
    },
    mutations: {
        ...vuexfireMutations,
    },
    actions: {
        bindMenu: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('menu', db.collection('menu'))
        }),
        addUser: firestoreAction((context, payload) => {
            return db.collection('users').add(payload)
        }),
        saveR: firestoreAction((context, payload) => {
            return db.collection('rezult_zagadki').add(payload)
        }),
        delUser: firestoreAction((context, payload) => {
            return db.collection('users').doc(payload).delete()
        }),
        updateZag: firestoreAction((context, {id, doc}) => {
            db.collection('zagadki')
                .doc(id)
                .update(doc)
        }),

        

       
       initFirebase(){
        //  const firebaseApp =
          firebase.initializeApp({
            apiKey: "AIzaSyDP00rBL5Yz8ItqQtICLeB6NgENTexF3Ro",
            authDomain: "barcode-scanner-imei.firebaseapp.com",
            databaseURL: "https://barcode-scanner-imei-default-rtdb.firebaseio.com",
            projectId: "barcode-scanner-imei",
            storageBucket: "barcode-scanner-imei.appspot.com",
            messagingSenderId: "696521743486",
            appId: "1:696521743486:web:77a6483b2bba008be54c2f",
            measurementId: "G-Y9ED4TDVHZ"
          });
        },
    }
})

store.dispatch('bindMenu')
