import React, { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { AppContext } from '../AppContext';

import logo from '../assets/logo.svg';
import imageAvatar from '../assets/image-avatar.jpg';
import iconSun from '../assets/icon-sun.svg';
import iconMoon from '../assets/icon-moon.svg';

const SidebarWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #373b53;
    width: 103px;
    height: 100vh;
    left: 0;
    top: 0;
    border-radius: 0 20px 20px 0;
    @media (max-width: 1150px) {
        width: 100vw;
        flex-direction: row;
        align-items: center;
        height: 80px;
        border-radius: 0;
    }
`;
const LogoContainer = styled.div`
    width: 103px;
    height: 103px;
    & img {
        width: 100%;
    }
    @media (max-width: 1150px) {
        width: 80px;
        height: 80px;
    }
`;

const SettingSection = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 145px;
    border-radius: 0 0 20px 0;
    &::after {
        position: absolute;
        content: '';
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 0.5px;
        background-color: #979797;
    }
    @media (max-width: 1150px) {
        flex-direction: row;
        height: 100%;
        width: 125px;
        &::after {
            left: 40%;
            top: 50%;
            width: 0.5px;
            height: 100%;
        }
    }
`;

const AvatarLogo = styled.div`
    border-radius: 50%;
    height: 45px;
    width: 45px;
    background: url(${imageAvatar});
    background-size: cover;
    cursor: pointer;
`;

const DarkMode = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: url(${({ isDarkMode }) => (isDarkMode ? iconSun : iconMoon)});
`;

function Sidebar() {
    const { handleDarkMode, isDarkMode } = useContext(AppContext);

    return (
        <SidebarWrapper>
            <LogoContainer>
                <img src={logo} alt='logo' />
            </LogoContainer>
            <SettingSection>
                <DarkMode onClick={handleDarkMode} isDarkMode={isDarkMode} />
                <AvatarLogo as={motion.div} whileHover={{ scale: 1.2 }} />
            </SettingSection>
        </SidebarWrapper>
    );
}

export default Sidebar;
