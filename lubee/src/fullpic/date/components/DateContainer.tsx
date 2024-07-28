import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
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
  memory_id: number;
  setMemoryId: (id: number) => void;
}

export default function DateContainer(props: DateContainerProps) {
  const { setOpenEmojiDetail, selectedEmojiText, setSelectedEmojiText, specificDto, memory_id, setMemoryId } = props;
  const picRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 스크롤할때마다 memoryId를 반영할 수 있게
  const observer = useRef<IntersectionObserver | null>(null);
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const picMemoryId = entry.target.getAttribute("data-memory-id");
          if (picMemoryId) {
            setMemoryId(Number(picMemoryId));
          }
        }
      });
    },
    [setMemoryId],
  );
  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    const currentObserver = observer.current;
    picRefs.current.forEach((pic) => {
      if (pic) currentObserver.observe(pic);
    });

    return () => {
      picRefs.current.forEach((pic) => {
        if (pic) currentObserver.unobserve(pic);
      });
    };
  }, [specificDto, handleIntersection]);

  // 클릭한 memory_id와 일치하는 pic가는 ref
  useEffect(() => {
    const index = specificDto.findIndex((item) => item.memory_id === memory_id);

    // 매칭 pic으로 스크롤
    if (index !== -1 && picRefs.current[index]) {
      picRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [specificDto, memory_id]);

  return (
    <Wrapper>
      {specificDto.map((data, index) => {
        const {
          memory_id: picMemoryId,
          user_id,
          location_name,
          picture,
          writer_profile_first,
          writer_profile_second,
          reaction_first,
          reaction_second,
          upload_time,
        } = data;
        const profile = getProfileIconSrc("me", "profile2");

        useEffect(() => {
          if (reaction_first) {
            setSelectedEmojiText(reaction_first);
          }
        }, [reaction_first]);
        const myEmoji = getEmojiSrc("me", selectedEmojiText) || undefined;
        const partnerEmoji = reaction_second ? getEmojiSrc("partner", reaction_second) : undefined;

        return (
          <ContentsBox key={picMemoryId} ref={(el) => (picRefs.current[index] = el)}>
            <Time>{upload_time}</Time>
            <Profile>
              <ProfileIcon as={profile} />
              <Name>{writer_profile_first}</Name>
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
              <EmojiBar setSelectedEmojiText={setSelectedEmojiText} selectedEmojiText={selectedEmojiText} />
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
