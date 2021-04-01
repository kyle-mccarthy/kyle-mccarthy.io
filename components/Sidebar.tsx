import { FC } from 'react';
import styled from '@emotion/styled';
import { Theme } from 'theme-ui';

const Name = styled.p((_theme: Theme) => ({
  letterSpacing: 2.4,
  fontSize: 23,
  textTransform: 'uppercase',
  padding: 0,
  margin: 0,
}));

const Title = styled.p({
  padding: 0,
  margin: 0,
  textTransform: 'uppercase',
  fontSize: 12,
  fontWeight: 400,
});

const Sidebar: FC = () => {
  return (
    <div>
      {/* <Name>Kyle McCarthy</Name> */}
      <Title>Software Engineer</Title>
    </div>
  );
};

export default Sidebar;
