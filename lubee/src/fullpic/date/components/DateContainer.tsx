import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import EmojiBar from "@common/components/EmojiBar";
import FullPicContainer from "@common/components/FullPicContainer";
import EmojiTag from "@common/components/EmojiTag";
import getEmojiSrc from "@common/utils/getEmojiSrc";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import getProfileIconSrc from "@common/utils/getHoverProfileIconSrc";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

interface DateContainerProps {
  setOpenEmojiDetail: (open: boolean) => void;
  selectedEmojiText: string;
  setSelectedEmojiText: (text: string) => void;
  specificDto: MemoryBaseDtoDataTypes[];
  memory_id: number;
  setMemoryId: (id: number) => void;
}

export default function DateContainer(props: DateContainerProps) {
  const { setOpenEmojiDetail, selectedEmojiText, setSelectedEmojiText, specificDto, memory_id, setMemoryId } = props;
  /*페이지 네이션*/
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(specificDto.length / itemsPerPage);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // memory_id와 일치하는 페이지
  useEffect(() => {
    const initialPage = specificDto.findIndex((item) => item.memory_id === memory_id);
    if (initialPage !== -1) {
      setCurrentPage(Math.floor(initialPage / itemsPerPage));
    }
  }, [memory_id, specificDto, itemsPerPage]);

  // 클릭한 memory_id가 먼저 보이게 하는 ref
  useEffect(() => {
    const initialPage = specificDto.findIndex((item) => item.memory_id === memory_id);
    if (initialPage !== -1 && itemRefs.current[initialPage % itemsPerPage]) {
      itemRefs.current[initialPage % itemsPerPage]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [currentPage, memory_id, specificDto, itemsPerPage]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      setMemoryId(specificDto[newPage * itemsPerPage].memory_id);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      setMemoryId(specificDto[newPage * itemsPerPage].memory_id);
    }
  };

  const currentItems = specificDto.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <Wrapper>
      {currentItems.map((data, index) => {
        const {
          memory_id: picMemoryId,
          location_name,
          picture,
          writer_profile_first,
          reaction_first,
          reaction_second,
          upload_time,
        } = data;

        useEffect(() => {
          if (reaction_first) {
            setSelectedEmojiText(reaction_first);
          }
        }, [reaction_first, setSelectedEmojiText]);

        const myEmoji = getEmojiSrc("me", selectedEmojiText) || undefined;
        const partnerEmoji = reaction_second ? getEmojiSrc("partner", reaction_second) : undefined;

        const { data: coupleInfo } = useGetCouplesInfo();
        if (!coupleInfo) return <></>;
        const { nickname_first, profile_first, nickname_second, profile_second } = coupleInfo.response;

        // account를 프로필이 null이 아닌 것으로 설정
        const account = writer_profile_first !== null ? "me" : "partner";

        // 작성자가 첫 번째 프로필이면 "me", 아니면 "partner"
        const writerProfile =
          account === "me" ? getProfileIconSrc("me", profile_first) : getProfileIconSrc("partner", profile_second);

        const writerNickname = account === "me" ? nickname_first : nickname_second;

        return (
          <ContentsBox key={picMemoryId} ref={(el) => (itemRefs.current[index] = el)}>
            <Time>{upload_time}</Time>
            <Profile>
              <ProfileIcon as={writerProfile} />
              <Name>{writerNickname}</Name>
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
              <EmojiBar setSelectedEmojiText={setSelectedEmojiText} memory_id={picMemoryId} />
            </Footer>
          </ContentsBox>
        );
      })}
      <Pagination>
        <PageButton onClick={handlePrevPage} disabled={currentPage === 0}>
          {"<"}
        </PageButton>
        <PageIndicator>
          {currentPage + 1} / {totalPages}
        </PageIndicator>
        <PageButton onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
          {">"}
        </PageButton>
      </Pagination>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const PageButton = styled.button`
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray_50};
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.span`
  margin: 0 1rem;
  ${({ theme }) => theme.fonts.Body_3}

  color: ${({ theme }) => theme.colors.gray_900};
`;
