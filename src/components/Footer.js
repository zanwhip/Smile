import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/image/logo.png';
import twitter from '../Assets/image/twitter.png'
import instagram from '../Assets/image/instagram.png'
import Pinterest from '../Assets/image/Pinterest.png'
import youtube from '../Assets/image/youtube.png'

import { Button, capitalize } from '@mui/material';

const Footer = () => {
  return (
    <Wrapper>
       <img src={logo} alt="Logo" style={{ width : 100, height : 100 }}/>
      <Column>
        <h1 
        style = {{ 
          color: 'white',
          fontFamily : 'Playfair Display',
          fontWeight: 700,
          textTransform: capitalize,
          wordWrap: 'break-word'
         }}
        >
          SMILE EYE CHARITY
        </h1>
      </Column>
      <Column>
        <DoubleSizeText>THÔNG TIN TỔ CHỨC</DoubleSizeText>
        <NormalSizeText>Công ty TNHH từ thiện Smile Eye Charity Smile Eye Charity</NormalSizeText>
        <DoubleSizeText>ĐỊA CHỈ</DoubleSizeText>
        <NormalSizeText>Thôn Pà-Ong, Xã Cà Dy, huyện Nam Giang, tỉnh Quảng Nam</NormalSizeText>
      </Column>
      <Column>
        <Text>LIÊN HỆ</Text>
        <InputWrapper>
          <LeftInput />
          <Button variant="contained" sx={{ backgroundColor : '#219D80' , marginRight : 10 }}>Subscribe</Button>
        </InputWrapper>
        <Text>THEO DÕI TẠI</Text>
        <CircleContainer>
          <div style={{ borderRadius : 90, width : 30, height : 30, backgroundColor : 'white' , margin : 7  }}>
            <img src={twitter} style={{ width : 20, height : 20, margin : 5 }}/>
          </div>
          <div style={{ borderRadius : 90, width : 30, height : 30, backgroundColor : 'white' , margin : 7  }}>
            <img src={instagram} style={{ width : 20, height : 20, margin : 5 }}/>
          </div>
          <div style={{ borderRadius : 90, width : 30, height : 30, backgroundColor : 'white' , margin : 7  }}>
            <img src={Pinterest} style={{ width : 20, height : 20, margin : 5 }}/>
          </div>
          <div style={{ borderRadius : 90, width : 30, height : 30, backgroundColor : 'white' , margin : 7  }}>
            <img src={youtube} style={{ width : 20, height : 20, margin : 5 }}/>
          </div>  
          
        </CircleContainer>
      </Column>
    </Wrapper>
  );
};



const Wrapper = styled.section`
position: fixed;

   width: 100%; 
  display: flex;
  justify-content: space-between;
  background-color: #0C7C25;
  padding: 20px;
  
`;

const Column = styled.div`
  flex: 1;
  color: #fff;
`;

const DoubleSizeText = styled.h2`
  font-size: 2em;
  color: white;
font-size: 16px;
font-family: Playfair Display;
font-weight: 700;
text-transform: capitalize;
line-height: 24px;
word-wrap: break-word
`;

const NormalSizeText = styled.p`
  font-size: 1em;
  color: #AFAFAF;
font-size: 16px;
font-family: Montserrat;
font-weight: 400;
text-transform: capitalize;
line-height: 24px;
word-wrap: break-word
`;

const Text = styled.p`
  color: white;
font-size: 16px;
font-family: Playfair Display;
font-weight: 700;
text-transform: capitalize;
line-height: 24px;
word-wrap: break-word
`;

const InputWrapper = styled.div`
  display: flex;
`;

const LeftInput = styled.input`
  flex: 1;
  background-color: white; /* Màu trái */
`;

const RightInput = styled.input`
  flex: 1;
  background-color: #00f; /* Màu phải */
`;

const CircleContainer = styled.div`
  display: flex;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #D3DAE8;
  margin: 7px;
`;

export default Footer;