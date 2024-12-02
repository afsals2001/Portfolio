import React from 'react';
import styled from 'styled-components';
import { Snackbar } from '@mui/material';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactInfoWrapper = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInfoItem = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center; /* Align icon and text */
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  margin-left: 16px; /* Increased space between icon and text */
  &:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.div`
  font-size: 20px; /* Adjust the icon size */
  color: ${({ theme }) => theme.primary};
  margin-right: 16px; /* Space between icon and text */
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me through any of the below links!</Desc>
        
        <ContactInfoWrapper>
          <ContactInfoItem>
            <IconWrapper><FaPhoneAlt /></IconWrapper>
            <strong>Contact Number:</strong>
            <span>7502312683</span>
          </ContactInfoItem>

          <ContactInfoItem>
            <IconWrapper><FaEnvelope /></IconWrapper>
            <strong>Email ID:</strong>
            <ContactLink href="mailto:afsals2001@gmail.com" target="_blank">
              afsals2001@gmail.com
            </ContactLink>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <IconWrapper><FaLinkedin /></IconWrapper>
            <strong>LinkedIn:</strong>
            <ContactLink href="https://www.linkedin.com/in/afsal2001/" target="_blank">
              afsal2001
            </ContactLink>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <IconWrapper><FaGithub /></IconWrapper>
            <strong>GitHub:</strong>
            <ContactLink href="https://github.com/afsals2001" target="_blank">
              afsals2001
            </ContactLink>
          </ContactInfoItem>
        </ContactInfoWrapper>
      </Wrapper>
    </Container>
  );
}

export default Contact;
