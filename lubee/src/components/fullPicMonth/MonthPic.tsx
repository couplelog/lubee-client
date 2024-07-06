import styled from "styled-components";
import { ProfileIc } from "@assets/index";
import { fullPicData } from "@core/fullPicData";
import EmojiBar from "@components/@common/EmojiBar";
import { smallEmojisData } from "@core/smallEmojisData";
import { EmojisDataTypes } from "types/EmojisDataTypes";
import { MintHeartSmallIcon } from "@styles/@common/commonEmojiSmall";
import FullPic from "@components/@common/FullPic";

interface MonthPicProps {
  setOpenEmojiDetail: (open: boolean) => void;
  selectedEmojiText: string;
  setSelectedEmojiText: (text: string) => void;
}

export default function MonthPic(props: MonthPicProps) {
  const { setOpenEmojiDetail, selectedEmojiText, setSelectedEmojiText } = props;

  const selectedEmojiData = smallEmojisData.find((emoji: EmojisDataTypes) => emoji.emoji === selectedEmojiText);
  const EmojiIcon = selectedEmojiData ? selectedEmojiData.iconSrc : null;

  return (
    <Wrapper>
      {fullPicData &&
        fullPicData.map((data) => {
          const { time, picSrc, location, name } = data;
          return (
            <ContentsBox key={time}>
              <Time>{time}</Time>
              <Profile>
                <ProfileIcon />
                <Name>{name}</Name>
              </Profile>
              <FullPic picSrc={picSrc} location={location} />
              <EmojiTag
                type="button"
                onClick={() => {
                  setOpenEmojiDetail(true);
                }}>
                {EmojiIcon && <EmojiIcon />}
                <MintHeartSmallIcon />
              </EmojiTag>
              <Footer>
                <EmojiBar setSelectedEmojiText={setSelectedEmojiText} />
              </Footer>
            </ContentsBox>
          );
        })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const EmojiTag = styled.button`
  display: flex;
  gap: 0.4rem;
  position: absolute;
  top: 45rem;
  left: 4rem;
  padding: 0.6rem 1.2rem;
  border-radius: 31px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15.38rem 1.42rem 2.1rem;
`;
