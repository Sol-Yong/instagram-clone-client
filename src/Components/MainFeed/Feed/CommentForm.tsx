import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 4px 16px 4px 12px;
  border-top: 1px solid rgb(239, 239, 239);
`;

const Form = styled.form`
  height: 40px;
  align-items: center;
  border: 0;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  font: inherit;
  font-size: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const TextArea = styled.textarea`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  background: none;
  border: none;
  color: rgb(38, 38, 38);
  display: flex;
  flex-grow: 1;
  font-size: inherit;
  height: 18px;
  max-height: 80px;
  outline: none;
  padding: 0;
  resize: none;
  width: 0;
  overflow: hidden;
`;

const Button = styled.button`
  border: 0;
  color: rgb(0, 149, 246);
  display: inline-block;
  background: none;
  position: relative;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &[disabled] {
    opacity: 0.3;
    cursor: auto;
  }
`;

function CommentForm() {
  const [text, setText] = useState('');

  const onSubmit = (evnet: React.FormEvent<HTMLFormElement>) => {
    evnet.preventDefault();
    setText('');
  };

  const handleTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;
    setText(value);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <TextArea
          autoComplete="off"
          autoCorrect="off"
          placeholder="댓글 달기..."
          value={text}
          onChange={handleTextArea}
        >
          {text}
        </TextArea>
        <Button disabled={!text} type="submit">
          게시
        </Button>
      </Form>
    </Container>
  );
}

export default CommentForm;
