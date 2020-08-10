import React from 'react';
import { shallow } from 'enzyme';

import { Player } from '@/constants/player';
import GridBlock, {GridBlockProps} from './GridBlock';

describe('GridBlock component', () => {
  const defaultProps: GridBlockProps = {
    type: Player.o
  };

  const createWrapper = (props: Partial<GridBlockProps> = {}) =>
    shallow(<GridBlock {...defaultProps} {...props} />);

  it('onClick function should be called', () => {
    const testClick = jest.fn();

    const wrapper = createWrapper({
      onClick: testClick(),
    });

    wrapper.simulate('click');
    expect(testClick).toBeCalled();
  });
});
