import React from 'react';
import { shallow } from 'enzyme';

import { Player } from '@/constants/player';
import GridBlock, { GridBlockProps } from './GridBlock';
import Omark from './components/Omark';
import Xmark from './components/Xmark';

describe('GridBlock component', () => {
  const defaultProps: GridBlockProps = {
    type: Player.o,
  };

  const createWrapper = (props: Partial<GridBlockProps> = {}) =>
    shallow(<GridBlock {...defaultProps} {...props} />);

  it('should render Omark when Player.o is passed to type', () => {
    const wrapper = createWrapper({});

    expect(wrapper.containsMatchingElement(<Omark />)).toEqual(true);
  });

  it('should render Xmark when Player.x is passed to type', () => {
    const wrapper = createWrapper({
      type: Player.x,
    });

    expect(wrapper.containsMatchingElement(<Xmark />)).toEqual(true);
  });

  it('onClick function should be called', () => {
    const testClick = jest.fn();

    const wrapper = createWrapper({
      onClick: testClick(),
    });

    wrapper.simulate('click');
    expect(testClick).toBeCalled();
  });
});
