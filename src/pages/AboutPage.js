import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const SectionContainer = styled.div`
    background-color: #ffcc99;
    border-radius: 10px;
    padding: 20px;
    margin: 10px 0;
    width: 80%;
    max-width: 800px;
`;

const Title = styled.h1`
    text-align: center;
    font-family: 'Nunito', sans-serif;
`;

const Subtitle = styled.h2`
    text-align: center;
    font-family: 'Nunito', sans-serif;
`;

const Paragraph = styled.p`
    font-family: 'Nunito', sans-serif;
`;

const AboutPage = () => {
    return (
        <PageContainer>
            <SectionContainer>
                <Title>About Us</Title>
                <Paragraph>
                    Welcome to CandyBuzz, your number one source for all things
                    candy and energy drinks. We're dedicated to providing you
                    the best of sweets and refreshments, with a focus on
                    quality, customer service, and uniqueness.
                </Paragraph>
            </SectionContainer>

            <SectionContainer>
                <Subtitle>Contact Us</Subtitle>
                <Paragraph>Email: support@candybuzz.com</Paragraph>
                <Paragraph>Phone: +1 234 567 890</Paragraph>
                <Paragraph>
                    Address: 123 Candy Lane, Sweet City, Candyland
                </Paragraph>
            </SectionContainer>

            <SectionContainer>
                <Subtitle>FAQ</Subtitle>
                <Paragraph>
                    <strong>Q: How can I track my order?</strong>
                </Paragraph>
                <Paragraph>
                    A: You can track your order using the tracking number
                    provided in the confirmation email.
                </Paragraph>
                <Paragraph>
                    <strong>Q: What is your return policy?</strong>
                </Paragraph>
                <Paragraph>
                    A: We accept returns within 30 days of purchase. The item
                    must be unopened and in its original condition.
                </Paragraph>
                <Paragraph>
                    <strong>Q: Do you offer international shipping?</strong>
                </Paragraph>
                <Paragraph>
                    A: Yes, we do offer international shipping. Shipping costs
                    and delivery times will vary based on the destination.
                </Paragraph>
            </SectionContainer>
        </PageContainer>
    );
};

export default AboutPage;
