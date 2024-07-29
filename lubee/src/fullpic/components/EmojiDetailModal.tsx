import { ShortBorderIc } from "assets/index";
import styled from "styled-components";
import { forwardRef } from "react";
import getEmojiSrc from "@common/utils/getEmojiSrc";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import { useGetOnePic } from "fullpic/hooks/useGetOnePic";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

interface EmojiDetailModalProps {
  selectedEmojiText: string;
  memory_id: number;
}

const EmojiDetailModal = forwardRef<HTMLDivElement, EmojiDetailModalProps>((props, ref) => {
  const { selectedEmojiText, memory_id } = props;

  const { data: coupleInfo } = useGetCouplesInfo(); // 서버한테 어떤 프로필과 닉네임 선택했는지 받아오면 됨
  const { data: emojiData } = useGetOnePic(memory_id); // 서버한테 어떤 공감을 선택했는지 받아오면 됨
  if (!emojiData || !coupleInfo) return <></>;

  const myEmoji = getEmojiSrc("me", selectedEmojiText) || undefined; //내 이모지는 바뀔 수 있으니까 selected로
  const partnerEmoji = getEmojiSrc("partner", emojiData.response.reaction_second) || undefined;

  const { nickname_first, profile_first, nickname_second, profile_second } = coupleInfo.response;

  const myProfile = getProfileIconSrc("me", profile_first);
  const partnerProfile = getProfileIconSrc("partner", profile_second);

  const myNickname = nickname_first;
  const partnerNickname = nickname_second;

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
                <Name>{myNickname}</Name>
              </Profile>
              <EmojiIcon as={myEmoji} />
            </MyEmoji>
          )}
          <PartnerEmoji>
            <Profile>
              <ProfileIcon as={partnerProfile} />
              <Name>{partnerNickname}</Name>
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
  border-radius: 16px 16px 0 0;
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
