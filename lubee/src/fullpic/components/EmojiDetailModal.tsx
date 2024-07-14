import { ShortBorderIc } from "@assets/index";
import styled from "styled-components";
import { forwardRef } from "react";
import getEmojiSrc from "@common/utils/getEmojiSrc";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";

interface EmojiDetailModalProps {
  selectedEmojiText: string;
}

const EmojiDetailModal = forwardRef<HTMLDivElement, EmojiDetailModalProps>((props, ref) => {
  const { selectedEmojiText } = props;

  /* 서버한테 어떤 프로필을 선택했는지 받아오면 됨*/
  const myProfile = getProfileIconSrc("me", "profile1");
  const partnerProfile = getProfileIconSrc("partner", "profile2");

  /* 서버한테 어떤 공감을 선택했는지 받아오면 됨*/
  const myEmoji = getEmojiSrc("me", selectedEmojiText);
  const partnerEmoji = getEmojiSrc("partner", selectedEmojiText);

  return (
    <Background>
      <Container ref={ref}>
        <Header>
          <ShortBorderIc />
          <Text>공감</Text>
        </Header>
        <EmojiBox>
          {selectedEmojiText && (
            <MyEmoji>
              <Profile>
                <ProfileIcon as={myProfile} />
                <Name>불꽃피카츄</Name>
              </Profile>
              <EmojiIcon as={myEmoji} />
            </MyEmoji>
          )}
          <PartnerEmoji>
            <Profile>
              <ProfileIcon as={partnerProfile} />
              <Name>맹꽁이</Name>
            </Profile>
            <EmojiIcon as={partnerEmoji} />
          </PartnerEmoji>
        </EmojiBox>
      </Container>
    </Background>
  );
});

export default EmojiDetailModal;

const Background = styled.div`
  position: absolute;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 0 5.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  padding: 1.6rem 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray_800};
  ${({ theme }) => theme.fonts.Title_1};
`;

const EmojiBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MyEmoji = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2rem;
`;

const PartnerEmoji = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2rem;
`;

const Profile = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const ProfileIcon = styled.svg`
  width: 5rem;
  height: 5rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.Body_2};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const EmojiIcon = styled.svg`
  width: 3.2rem;
  height: 3.2rem;
`;
