import { useState, useEffect } from "react";
import styled from "styled-components";
import { CheckIc, CheckYellowIc, PencilIc, XIc } from "@assets/index";

interface CommentInputModalProps {
  handleCloseBtn: () => void;
  handleModifyBtn: () => void;
  profileIconSrc: string;
}

export default function CommentInputModal(props: CommentInputModalProps) {
  const { handleCloseBtn, handleModifyBtn, profileIconSrc } = props;
  const [text, setText] = useState("");
  const [textLength, setTextLength] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= 100) {
      setText(newText);
      setTextLength(newText.length);
    }
  };

  return (
    <Background>
      <Container>
        <HeaderContainer>
          <ProfileIcon as={profileIconSrc} />
          <CheckIcon />
        </HeaderContainer>
        <TextBox placeholder="최소 10글자 이상 작성해주세요" value={text} onChange={handleTextChange} />
        <LengthText>{textLength}/100</LengthText>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 24rem;
  left: 5.6rem;
  width: 27.8rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 1.2rem;
`;

const ProfileIcon = styled.svg`
  width: 3rem;
  height: 3rem;
`;

const CheckIcon = styled(CheckIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const CheckYellowIcon = styled(CheckYellowIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const TextBox = styled.textarea`
  ${({ theme }) => theme.fonts.SubTitle};

  overflow: hidden;
  width: 100%;
  height: 12.8rem;
  padding: 0 1.2rem;
  border: none;
  resize: none;
  color: ${({ theme }) => theme.colors.gray_700};
  outline: none; /* 입력 시 생기는 테두리 제거 */

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_200}; /* 원하는 색상으로 변경 */
  }
`;

const LengthText = styled.p`
  ${({ theme }) => theme.fonts.Body_1};

  padding: 0 1.2rem 1.2rem 0;
  color: ${({ theme }) => theme.colors.gray_200};
`;

const PencilIcon = styled(PencilIc)`
  width: 2.6779rem;
  height: 2.4rem;
`;

const XIcon = styled(XIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
