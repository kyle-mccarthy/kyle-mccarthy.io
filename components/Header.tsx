import { FC } from 'react';
import { colors } from '../theme';

const Header: FC = () => {
  return (
    <div>
      <div
        sx={{
          fontSize: 100,
          lineHeight: 0.9,
          textShadow: (theme) =>
            `4px 4px 0px ${colors.background.lighten(
              25
            )}, 8px 8px 0px ${colors.background.lighten(15)} `,
          // `3px 0px 0px #E26D3C, 0px -3px 0 #C7AD48, 0px 3px 0px #5498D5`,
          fontFamily: 'Special3',
          textTransform: 'uppercase',
          //fontVariationSettings: '"wght" 900, "wdth" 104',
        }}
      >
        Kyle
        <br />
        McCarthy
      </div>
    </div>
  );
};

export default Header;
