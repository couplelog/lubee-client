import styled from "styled-components";
import FullPicContainer from "@common/components/FullPicContainer";
import getProfileIconSrc from "@common/utils/getProfileIconSrc";
import { MemoryBaseDtoDataTypes } from "fullpic/api/getOnePic";

interface OneContainerProps {
  account: string;
  memoryBaseDto: MemoryBaseDtoDataTypes;
}

export default function OneContainer(props: OneContainerProps) {
  const { account, memoryBaseDto } = props;

  const profile = getProfileIconSrc(account, "profile1");

  return (
    <Wrapper>
      <Time>{memoryBaseDto.upload_time}</Time>
      <Profile>
        <ProfileIcon as={profile} />
        <Name>{memoryBaseDto.writer_profile}</Name>
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
