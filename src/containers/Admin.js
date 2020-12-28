import React, { useContext } from 'react';
import { Header } from '../components';
import { StudentsContainer } from './Students';
import { FooterContainer } from './Footer';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../routes/routes';

export function AdminContainer(){
    //Hook into firebase via context created in /context 
    const { firebase } = useContext(FirebaseContext);

    const user = {
        displayName: "Tom",
        photoURL: "avatar"
    }

    return(
        <>
            <Header>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={"./images/logo.svg"} alt="logo" />
                    </Header.Group>
                    
                    <Header.Group>
                        <Header.Profile>
                            <Header.Group>
                                <Header.Picture src={user.photoURL} />
                                <Header.Link>{user.displayName}</Header.Link>
                            </Header.Group>

                            <Header.Group>
                                <Header.Link onClick={() => firebase.auth().signOut()} style={{color:"#000"}}>
                                    Sign Out
                                </Header.Link>
                            </Header.Group>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
            </Header>
            <StudentsContainer />
            <FooterContainer />
        </>
    );
}