import { MintHeartIc, ShortBorderIc } from "@assets/index";
import styled from "styled-components";
import { forwardRef } from "react";
import { bigEmojisData } from "@common/core/bigEmojisData";
import { EmojisDataTypes } from "@common/types/EmojisDataTypes";
import getIconSrc from "@common/utils/getIconSrc";

interface EmojiDetailModalProps {
  selectedEmojiText: string;
}

const EmojiDetailModal = forwardRef<HTMLDivElement, EmojiDetailModalProps>((props, ref) => {
  const { selectedEmojiText } = props;
  const selectedEmojiData = bigEmojisData.find((emoji: EmojisDataTypes) => emoji.emoji === selectedEmojiText);
  const EmojiIcon = selectedEmojiData ? selectedEmojiData.iconSrc : null;

  /* 서버한테 어떤 프로필을 선택했는지 받아오면 됨*/
  const myProfile = getIconSrc("me", "profile1");
  const partnerProfile = getIconSrc("partner", "profile2");

  return (
    <Background>
      <Container ref={ref}>
        <Header>
          <ShortBorderIc />
          <Text>공감</Text>
        </Header>
        <EmojiBox>
          {EmojiIcon && (
            <MyEmoji>
              <Profile>
                <ProfileIcon as={myProfile} />
                <Name>불꽃피카츄</Name>
              </Profile>
              <EmojiIcon />
            </MyEmoji>
          )}
          <PartnerEmoji>
            <Profile>
              <ProfileIcon as={partnerProfile} />
              <Name>맹꽁이</Name>
            </Profile>
            <BfEmoji />
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

const BfEmoji = styled(MintHeartIc)`
  width: 3.2rem;
  height: 3.2rem;
`;
