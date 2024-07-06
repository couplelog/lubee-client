import styled from "styled-components";
import { FullPicStyle } from "@styles/@common/commonPic";
import Location from "@components/@common/Location";
import { ProfileIc } from "@assets/index";

interface ContentsProps {
  name: string;
  picSrc: string;
}

export default function Contents(props: ContentsProps) {
  const { name, picSrc } = props;
  return (
    <Wrapper>
      <Profile>
        <ProfileIcon />
        <Name>{name}</Name>
      </Profile>
      <PicBox>
        <Pic src={picSrc}></Pic>
        <Location location={"느루 연남점"} />
      </PicBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const PicBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  width: 100%;
  padding: 1.8rem 2rem 0;
`;

const Pic = styled.img`
  ${FullPicStyle};
`;
