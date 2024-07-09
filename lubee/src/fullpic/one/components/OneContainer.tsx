import styled from "styled-components";
import { ProfileIc } from "@assets/index";
import FullPicContainer from "@common/components/FullPicContainer";
import fullPic from "@assets/image/fullPic.png";

interface OneContainerProps {
  name: string;
  picSrc: string;
}

export default function OneContainer(props: OneContainerProps) {
  const { name, picSrc } = props;
  return (
    <Wrapper>
      <Time>오후 2:17</Time>
      <Profile>
        <ProfileIcon />
        <Name>{name}</Name>
      </Profile>
      <FullPicContainer picSrc={fullPic} location={"느루 연남점"} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Time = styled.p`
  ${({ theme }) => theme.fonts.Body_3}

  color: ${({ theme }) => theme.colors.gray_500};
`;

const Profile = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4rem 2rem 0;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.Title_1};

  color: ${({ theme }) => theme.colors.gray_900};
`;

const ProfileIcon = styled(ProfileIc)`
  width: 3rem;
  height: 3rem;
`;
