import React from 'react';
import logo from '../assets/img/logo_blog.jpg'
import styled from '@emotion/styled';

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  height: 65vh;
`;

const ContactTitle = styled.h2`
  color: #333;
`;

const ContactInfo = styled.div`
  color: #555;
  font-size: 16px;
  margin-top: 10px;
`;

const Image = styled('img')({
    width: "40%",
})
const Contact = () => {
    return (
        <ContactContainer>
            <Image src={logo} alt="" srcset="" />

            <ContactTitle>Thông Tin Liên Hệ</ContactTitle>
            <ContactInfo>
                <p>
                    <strong>Họ tên: Trần Nhật Hào</strong>
                </p>
                <p>
                    <strong>MSSV: 20110471</strong>
                </p>
                <p>
                    <strong>Email: 20110471@student.hcmute.edu.vn</strong>
                </p>
                <p>
                    <strong>Bài tập môn Các Công Nghệ Phần Mềm Mới</strong>
                </p>
            </ContactInfo>
        </ContactContainer>
    );
};

export default Contact;
