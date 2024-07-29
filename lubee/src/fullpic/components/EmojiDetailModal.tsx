import { ShortBorderIc } from "assets/index";
import styled from "styled-components";
import { forwardRef } from "react";
import getEmojiSrc from "@common/utils/getEmojiSrc";
import getHoverProfileIconSrc from "@common/utils/getHoverProfileIconSrc";
import { useGetOnePic } from "fullpic/hooks/useGetOnePic";

interface EmojiDetailModalProps {
  selectedEmojiText: string;
  memory_id: number;
}

const EmojiDetailModal = forwardRef<HTMLDivElement, EmojiDetailModalProps>((props, ref) => {
  const { selectedEmojiText, memory_id } = props;

  /* 서버한테 어떤 공감을 선택했는지 받아오면 됨*/
  const { data: emojiData } = useGetOnePic(memory_id);
  if (!emojiData) return <></>;

  const myEmoji = getEmojiSrc("me", selectedEmojiText) || undefined; //내 이모지는 바뀔 수 있으니까 selected로
  const partnerEmoji = getEmojiSrc("partner", emojiData.response.reaction_second) || undefined;

  const writerProfileFirst = emojiData.response.writer_profile_first;
  const writerProfileSecond = emojiData.response.writer_profile_second;

  const isFirstWriter = writerProfileFirst !== null;
  const myProfile = getHoverProfileIconSrc("me", isFirstWriter ? writerProfileFirst : writerProfileSecond);
  const partnerProfile = getHoverProfileIconSrc("partner", isFirstWriter ? writerProfileSecond : writerProfileFirst);

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
