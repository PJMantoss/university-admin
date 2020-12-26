import React, { useContext } from 'react';
import { Header } from '../components';
import { StudentsContainer } from './Students';
import { FooterContainer } from './Footer';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../routes/routes';

export function AdminContainer(){
    const { firebase } = useContext(FirebaseContext);

    const user = {
        displayName: "Carl",
        photoURL: "1"
    }

    return(
        <>
            <Header>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="./images/logo.svg" alt="logo" />
                    </Header.Group>
                    
                    <Header.Group>
                        <Header.Profile>
                            <Header.Group>
                                <Header.Picture src={user.photoURL} />
                                <Header.Link>{user.displayName}</Header.Link>
                            </Header.Group>
                            <Header.Picture src="./images/avatar.jpg" />

                            <Header.Group>
                                <Header.Link onClick={() => firebase.auth().signOut()}>
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