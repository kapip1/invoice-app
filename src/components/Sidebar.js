import React, { useContext } from 'react';

import styled from 'styled-components';

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
`;
const LogoContainer = styled.div`
    & img {
        width: 100%;
    }
`;

const SettingSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 125px;
    border-radius: 0 0 20px 0;
`;

const AvatarLogo = styled.div`
    border-radius: 50%;
    height: 45px;
    width: 45px;
    background: url(${imageAvatar});
    background-size: cover;
`;

const DarkMode = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: 0.25s;
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
                <AvatarLogo />
            </SettingSection>
        </SidebarWrapper>
    );
}

export default Sidebar;
