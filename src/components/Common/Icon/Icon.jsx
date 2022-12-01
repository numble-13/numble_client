import styled from 'styled-components';

export const Icon = ({ Icon, size, color, stroke }) => {
  return (
    <IconBlock className="icon" color={color}>
      <Icon style={{ width: size + 'px', fill: color, stroke: stroke }} />
    </IconBlock>
  );
};

const IconBlock = styled.div`
  svg {
    display: block;
  }
  svg,
  path {
    fill: ${({ color }) => color};
    stroke: ${({ stroke }) => stroke};
  }
`;
