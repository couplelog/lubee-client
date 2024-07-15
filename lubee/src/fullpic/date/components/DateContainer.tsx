import styled from "styled-components";
import { fullPicData } from "@common/core/fullPicData";
import EmojiBar from "@common/components/EmojiBar";
import FullPicContainer from "@common/components/FullPicContainer";
import EmojiTag from "@common/components/EmojiTag";
import getEmojiSrc from "@common/utils/getEmojiSrc";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
interface DateContainerProps {
  setOpenEmojiDetail: (open: boolean) => void;
  selectedEmojiText: string;
  setSelectedEmojiText: (text: string) => void;
}

export default function DateContainer(props: DateContainerProps) {
  const { setOpenEmojiDetail, selectedEmojiText, setSelectedEmojiText } = props;

  // date 가져오기
  // const { date } = useParams<{ date: string }>();
  // const filteredData = fullPicData.filter((data) => data.date === date);

  /* 서버한테 어떤 공감을 선택했는지 받아오면 됨*/
  const myEmoji = getEmojiSrc("me", selectedEmojiText);
  const partnerEmoji = getEmojiSrc("partner", "thumb");

  return (
    <Wrapper>
      {fullPicData &&
        fullPicData.map((data) => {
          const { time, picSrc, location, name, account } = data;
          /* 서버한테 어떤 프로필을 선택했는지 받아오면 됨*/
          const profile = getProfileIconSrc(account, "profile2");
          return (
            <ContentsBox key={time}>
              <Time>{time}</Time>
              <Profile>
                <ProfileIcon as={profile} />
                <Name>{name}</Name>
              </Profile>
              <FullPicContainer picSrc={picSrc} location={location} />
              <EmojiTagContainer
                type="button"
                onClick={() => {
                  if (setOpenEmojiDetail) {
                    setOpenEmojiDetail(true);
                  }
                }}>
                <EmojiTag font="fullPic">
                  <EmojiIcon as={myEmoji} />
                  <EmojiIcon as={partnerEmoji} />
                </EmojiTag>
              </EmojiTagContainer>
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
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
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

const ProfileIcon = styled.svg`
  width: 3rem;
  height: 3rem;
`;

const EmojiTagContainer = styled.button`
  position: absolute;
  top: 45rem;
  left: 4rem;
  padding: 0;
  border: none;
  background: none;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10rem 1.42rem 2.1rem;
`;

const EmojiIcon = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;
