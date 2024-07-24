import styled from "styled-components";
import { fullPicData } from "@common/core/fullPicData";
import EmojiBar from "@common/components/EmojiBar";
import FullPicContainer from "@common/components/FullPicContainer";
import EmojiTag from "@common/components/EmojiTag";
import getEmojiSrc from "@common/utils/getEmojiSrc";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
interface DateContainerProps {
  setOpenEmojiDetail: (open: boolean) => void;
  selectedEmojiText: string;
  setSelectedEmojiText: (text: string) => void;
  specificDto: MemoryBaseDtoDataTypes[];
}

export default function DateContainer(props: DateContainerProps) {
  const { setOpenEmojiDetail, selectedEmojiText, setSelectedEmojiText, specificDto } = props;

  // date 가져오기
  // const { date } = useParams<{ date: string }>();
  // const filteredData = fullPicData.filter((data) => data.date === date);

  /* 서버한테 어떤 공감을 선택했는지 받아오면 됨*/
  const myEmoji = getEmojiSrc("me", selectedEmojiText);
  const partnerEmoji = getEmojiSrc("partner", "thumb");

  return (
    <Wrapper>
      {specificDto &&
        specificDto.map((data) => {
          const { memory_id, user_id, location_name, picture, writer_profile, reaction1, reaction2, upload_time } =
            data;
          /* 서버한테 어떤 프로필을 선택했는지 받아오면 됨*/
          const profile = getProfileIconSrc("me", "profile2");
          return (
            <ContentsBox key={memory_id}>
              <Time>{upload_time}</Time>
              <Profile>
                <ProfileIcon as={profile} />
                <Name>{writer_profile}</Name>
              </Profile>
              <FullPicContainer picSrc={picture} location={location_name} />
              {(myEmoji || partnerEmoji) && (
                <EmojiTagContainer
                  type="button"
                  onClick={() => {
                    if (setOpenEmojiDetail) {
                      setOpenEmojiDetail(true);
                    }
                  }}>
                  <EmojiTag font="fullPic">
                    {myEmoji && <EmojiIcon as={myEmoji} />}
                    {partnerEmoji && <EmojiIcon as={partnerEmoji} />}
                  </EmojiTag>
                </EmojiTagContainer>
              )}
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
  padding: 5rem 2.1rem 0;
`;

const EmojiIcon = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;
