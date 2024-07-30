import { useEffect, useState, forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { flexCenter } from "@styles/globalStyle";

interface YellowBoxProps {
  children?: React.ReactNode;
  $disabled: boolean;
  inputValue?: string;
  setInputValue?: (value: string) => void;
  placeholder?: string;
}

const YellowBox = forwardRef((props: YellowBoxProps, ref) => {
  const { children, $disabled, inputValue, setInputValue, placeholder } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputwidth, setInputwidth] = useState("auto");

  const MIN_WIDTH = 2.7; // 텍스트 입력 시 박스 최소 너비 (rem)
  const MAX_WIDTH = 17.3; // 텍스트 입력 시 박스 최대 너비 (rem)

  // placeholder의 길이에 따라 input의 너비를 설정하는 useEffect
  useEffect(() => {
    if (inputRef.current && placeholder) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        context.font = getComputedStyle(inputRef.current).font;
        const textWidth = context.measureText(placeholder).width;
        const remWidth = textWidth / parseFloat(getComputedStyle(document.documentElement).fontSize);
        setInputwidth(`${remWidth}rem`);
      }
    }
  }, [placeholder]);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length <= 10) {
      setInputValue?.(value);
    }
    if (inputRef.current) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        context.font = getComputedStyle(inputRef.current).font;
        const textWidth = context.measureText(value || placeholder || "").width;
        const remWidth = textWidth / parseFloat(getComputedStyle(document.documentElement).fontSize);
        setInputwidth(`${Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, remWidth))}rem`);
      }
    }
  }

  return (
    <Box $disabled={$disabled}>
      {$disabled ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          ref={inputRef}
          style={{ width: inputwidth }}
        />
      ) : (
        children
      )}
    </Box>
  );
});

const Box = styled.div<{ $disabled: boolean }>`
  width: auto;
  ${flexCenter}

  padding: 0.5rem 1rem;
  border-radius: 5px;

  ${({ theme }) => theme.fonts.Body_4};

  background-color: ${({ theme }) => theme.colors.yellow_50};
  color: ${({ theme }) => theme.colors.yellow_600};

  ${({ $disabled }) =>
    $disabled &&
    `
    cursor: not-allowed;
  `}

  & > input {
    height: 2.4rem;
    padding: 0;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.yellow_600}; /* 입력된 텍스트 색상 */
    text-align: center;
    outline: none;
    ${({ theme }) => theme.fonts.Body_4};

    &::placeholder {
      color: ${({ theme }) => theme.colors.yellow_300}; /* placeholder 텍스트 색상 */
    }
  }
`;

export default YellowBox;
