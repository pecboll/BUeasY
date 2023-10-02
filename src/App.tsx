import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defalt";
import { GLobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyA7OQ2di7WGw6mraOHdDFxwklFi8oB5P6s",
  authDomain: "bueasy-a7523.firebaseapp.com",
  databaseURL: "https://bueasy-a7523-default-rtdb.firebaseio.com",
  projectId: "bueasy-a7523",
  storageBucket: "bueasy-a7523.appspot.com",
  messagingSenderId: "434571297674",
  appId: "1:434571297674:web:b9b7a2383ba417f56bfe73"
};




export function App() {

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const productsCollectionRef = collection(db, "products" )

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef)
      console.log(data.docs)
    };
    getProducts()
  }, [])
	return (
<ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  <GLobalStyles />
</ThemeProvider>
  )		
}



