import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Container } from './Container';

const HeaderWrapper = styled.header`
    background-color: ${(props) => props.theme.dark.component};
    height: 48px;
`;

const FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    display: grid;
    column-gap: 10px;
    grid-template-columns: 60px 130fr;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <FlexBetween>
                    <svg
                        width='48px'
                        height='48px'
                        viewBox='0 0 192 192'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        stroke='#ffffff'
                    >
                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                        <g
                            id='SVGRepo_tracerCarrier'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                            <path
                                stroke='#fff'
                                stroke-linejoin='round'
                                stroke-width='12'
                                d='M153.933 114.718c-2.953-9.509-6.349-17.5-11.573-30.58C143.172 49.786 128.922 22 96.101 22c-33.189 0-47.125 28.34-46.24 62.139-5.241 13.097-8.62 21.033-11.573 30.579-6.276 20.256-4.246 28.636-2.695 28.821 3.323.407 12.94-15.243 12.94-15.243 0 9.064 4.651 20.886 14.73 29.413-4.873 1.499-15.82 5.532-13.217 9.953 2.105 3.57 36.217 2.275 46.056 1.165 9.838 1.11 43.95 2.405 46.055-1.165 2.602-4.403-8.362-8.454-13.217-9.953 10.078-8.546 14.73-20.367 14.73-29.413 0 0 9.617 15.65 12.94 15.243 1.569-.203 3.6-8.583-2.677-28.821Z'
                            ></path>
                        </g>
                    </svg>
                    <ButtonWrapper>
                        <Button>Войти</Button>
                        <Button>Авторизоваться</Button>
                    </ButtonWrapper>
                </FlexBetween>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
