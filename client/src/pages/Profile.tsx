import styled from 'styled-components';
import Layout from '../components/Layout';
import { useAppSelector } from '../redux/redux-hook';
import { getUserDataSelector } from '../redux/slices/authSlice/selectors';
import { useUserComments } from '../utils/hooks/useUserComments';
import { useParams } from 'react-router-dom';
import CommentsListWithLink from '../components/CommentsListWithLink';
import { AiOutlineEdit, AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
`;

const UserInfo = styled.div`
    display: flex;
    column-gap: 20px;
    background-color: ${(props) => props.theme.colors.componentBg};
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 15px;
`;

const ProfileAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`;

const UserName = styled.div`
    color: ${(props) => props.theme.mainColor};
    font-size: 21px;
    font-weight: 500;
    align-self: center;
`;

const CommentWrapper = styled.div`
    height: 400px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
`;

const Information = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 15px;
    justify-content: space-around;
    margin-top: 40px;
`;

const More = styled.div`
    display: flex;
    column-gap: 5px;
    cursor: pointer;
`;

const Title = styled.div`
    color: #6f6f6f;
    font-weight: 500;
    align-self: center;
    font-size: 14px;
`;

const InfoWrapper = styled.div`
    display: flex;
    row-gap: 20px;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.componentBg};
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.colors.border};
    padding: 15px 30px;
`;

const Description = styled.div`
    display: flex;
    column-gap: 10px;
`;

const DescriptionTitle = styled.div`
    color: #6f6f6f;
`;

const DescriptionText = styled.span`
    color: ${(props) => props.theme.mainColor};
`;

const CommentTitle = styled.div`
    color: ${(props) => props.theme.colors.font};
    font-size: 21px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 15px;
`;

const Profile = () => {
    const user = useAppSelector(getUserDataSelector);

    const { id } = useParams();

    const comments = useUserComments(id as string);

    return (
        <Layout>
            <>
                <ProfileWrapper>
                    <UserInfo>
                        <ProfileAvatar src={user?.avatarUrl} />
                        <Information>
                            <UserName>{user?.fullName}</UserName>
                            <More>
                                <AiOutlineEdit />
                                <Title>Изменить</Title>
                            </More>
                        </Information>
                    </UserInfo>
                    <InfoWrapper>
                        <Description>
                            <FaBirthdayCake />
                            <DescriptionTitle>
                                День рождения:
                                <DescriptionText> 4 октября</DescriptionText>
                            </DescriptionTitle>
                        </Description>
                        <Description>
                            <AiFillHome />
                            <DescriptionTitle>
                                Город:
                                <DescriptionText> Казань</DescriptionText>
                            </DescriptionTitle>
                        </Description>
                        <Description>
                            <BsBriefcaseFill />
                            <DescriptionTitle>
                                Образование:
                                <DescriptionText> КФУ</DescriptionText>
                            </DescriptionTitle>
                        </Description>
                        <Description>
                            <AiOutlineHeart />
                            <DescriptionTitle>
                                Семейное положение:
                                <DescriptionText> GG</DescriptionText>
                            </DescriptionTitle>
                        </Description>
                    </InfoWrapper>
                </ProfileWrapper>
                <div>
                    <CommentTitle>Комментарии</CommentTitle>
                    <CommentWrapper>
                        <CommentsListWithLink comments={comments} />
                    </CommentWrapper>
                </div>
            </>
        </Layout>
    );
};

export default Profile;
