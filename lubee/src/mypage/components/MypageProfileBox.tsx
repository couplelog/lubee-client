import styled from "styled-components";
import { XIc, EditIc } from "@assets/index";
import getHoverProfileIconSrc from "@common/utils/getHoverProfileIconSrc";

interface MypageProfileBoxProps {
  myName: string;
  myBirth: string;
  partnerName: string;
  partnerBirth: string;
}

export default function MypageProfileBox(props: MypageProfileBoxProps) {
  const { myName, myBirth, partnerName, partnerBirth } = props;

  /* 서버한테 어떤 프로필을 선택했는지 받아오면 됨*/
  const myProfile = getHoverProfileIconSrc("me", "profile1");
  const partnerProfile = getHoverProfileIconSrc("partner", "profile2");

  return (
    <Container>
      <ProfileContainer>
        <ProfileIcon as={myProfile} />
        <TextContainer>
          <NameText>{myName}</NameText>
          <BirthText>{myBirth}</BirthText>
        </TextContainer>
      </ProfileContainer>
      <XIcon />
      <ProfileContainer>
        <ProfileIcon as={partnerProfile} />
        <TextContainer>
          <NameText>{partnerName}</NameText>
          <BirthText>{partnerBirth}</BirthText>
        </TextContainer>
      </ProfileContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  gap: 2.4rem;
`;

const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

const ProfileIcon = styled.svg`
  width: 6rem;
  height: 6rem;
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
`;

const NameText = styled.h2`
  ${({ theme }) => theme.fonts.Title_1};

  color: ${({ theme }) => theme.colors.gray_700};
`;

const BirthText = styled.p`
  ${({ theme }) => theme.fonts.Caption_1};

  color: ${({ theme }) => theme.colors.gray_400};
`;

const XIcon = styled(XIc)`
  display: flex;
  width: 1.2rem;
  height: 1.2rem;
  margin-top: 2.6rem;
`;

const EditIcon = styled(EditIc)`
  width: 1.2rem;
  height: 1.2rem;
`;
