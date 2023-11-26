import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/img/logo_blog.jpg'


// Styled components
const IntroContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  height: 65vh;
`;

const Title = styled.h1`
  color: #333;
`;

const Description = styled.p`
  color: #555;
  font-size: 16px;
`;
const Image = styled('img')({
  width: "40%",
})


const About = () => {
  return (
    <IntroContainer>
      <Image   src={logo} alt="" srcset="" />
      <Title>Chào mừng bạn đến với Blog của chúng tôi</Title>
      <Description>
        Khám phá bộ sưu tập các bài viết của chúng tôi, bao gồm nhiều chủ đề đa dạng.
        Từ xu hướng công nghệ đến mẹo sinh sống, chúng tôi có điều gì đó cho mọi người.
      </Description>
    </IntroContainer>
  );
};

export default About;
