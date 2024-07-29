import styled from "styled-components";
import FullPicContainer from "@common/components/FullPicContainer";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";
import getHoverProfileIconSrc from "@common/utils/getHoverProfileIconSrc";
import { useGetCouplesInfo } from "@common/hooks/useGetCouplesInfo";

interface OneContainerProps {
  account: string;
  memoryBaseDto: MemoryBaseDtoDataTypes;
}

export default function OneContainer(props: OneContainerProps) {
  const { account, memoryBaseDto } = props;
  console.log(memoryBaseDto);

  const { data: coupleInfo } = useGetCouplesInfo();
  if (!coupleInfo) return <></>;
  const { nickname_first, profile_first, nickname_second, profile_second } = coupleInfo.response;

  // 작성자가 첫 번째 프로필이면 "me", 아니면 "partner"
  const writerProfile =
    account === "me" ? getHoverProfileIconSrc("me", profile_first) : getHoverProfileIconSrc("partner", profile_second);

  const writerNickname = account === "me" ? nickname_first : nickname_second;

  return (
    <Wrapper>
      <Time>{memoryBaseDto.upload_time}</Time>
      <Profile>
        <ProfileIcon as={writerProfile} />
        <Name>{writerNickname}</Name>
      </Profile>
      <FullPicContainer picSrc={memoryBaseDto.picture} location={memoryBaseDto.location_name} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
