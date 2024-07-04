import { MintHeartIc, ProfileIc, ShortBorderIc, YellowHeartIc } from "@assets/index";
import styled from "styled-components";
import { forwardRef } from "react";

const EmojiDetailModal = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Background>
      <Container ref={ref}>
        <Header>
          <ShortBorderIc />
          <Text>공감</Text>
        </Header>
        <EmojiBox>
          <Gf>
            <Profile>
              <ProfileIcon />
              <Name>불꽃피카츄</Name>
            </Profile>
            <GfEmoji />
          </Gf>
          <Bf>
            <Profile>
              <ProfileIcon />
              <Name>카츄</Name>
            </Profile>
            <BfEmoji />
          </Bf>
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

const Gf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2rem;
`;

const Bf = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2rem;
`;

const Profile = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const ProfileIcon = styled(ProfileIc)`
  width: 5rem;
  height: 5rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.Body_2};

  color: ${({ theme }) => theme.colors.gray_800};
`;

const GfEmoji = styled(YellowHeartIc)`
  width: 3.2rem;
  height: 3.2rem;
`;

const BfEmoji = styled(MintHeartIc)`
  width: 3.2rem;
  height: 3.2rem;
`;
