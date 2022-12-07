import styled from 'styled-components';

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 9px;
  position: relative;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 13px;
    font-weight: 500;
    line-height: 28px;
    padding: 0 6px;
  }
`;

export const WriterTag = styled.div`
  height: 20px;
  padding: 0 8px;
  font-size: ${({ theme }) => theme.font.xs};
  color: ${({ theme }) => theme.color.main};
  border: ${({ theme }) => theme.style.border_main};
  border-radius: 15px;
  display: inline-block;
`;

export const CommentText = styled.div`
  padding: 0 10px 6px;
  font-size: 15px;
`;

export const TextBox = styled.p`
  width: 100%;
  word-break: break-all;
`;

export const EditingForm = styled.form`
  display: flex;
  button {
    padding: 4px 6px;
    margin-left: 4px;
    font-size: 13px;
    line-height: 19.5px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
  }
`;

export const EditInput = styled.input`
  flex: 1;
  padding: 4px 6px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
`;

export const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 10px 15px 12px;
  &.onlyDate {
    justify-content: flex-end;
    padding-bottom: 10px;
  }
  button {
    display: flex;
    align-items: center;
    path {
      stroke: ${({ theme }) => theme.color.black_2};
    }
    span {
      font-size: 13px;
      line-height: 19.5px;
      padding-left: 4.5px;
      color: ${({ theme }) => theme.color.black_2};
    }
  }
  div {
    font-size: 11px;
    color: ${({ theme }) => theme.color.black_2};
    line-height: 28px;
  }
`;
