import React from 'react';
import { Footer } from '../components';

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Title>Admin University</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Student Information</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Media Center</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Support</Footer.Link>
                    <Footer.Link href="#">Courses</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>All Rights Reserved 2020 Admin University</Footer.Text>
        </Footer>
    )
}