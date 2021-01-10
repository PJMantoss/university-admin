import { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function AuthListener(){
    //initialize state
    const [user, setUser] = useState();

    //Hook into firebase via the context created in /context 
    const { firebase } = useContext(FirebaseContext);

    // useEffect to lookout for changes 
    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if(authUser){  //if there's an authenticated user, stringify and put in local storage
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else { //if not authenticated user, remove
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });
 
        //clean up function
        return () => listener();
    });

    return { user };
}