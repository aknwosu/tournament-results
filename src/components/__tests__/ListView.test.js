import React from 'react';
import { shallow } from 'enzyme';
import { ListView } from '../Tournaments/ListView'


describe('ListView', () => {
  const baseProps = {
    tournaments: [],
    onTournamentSelect: jest.fn(),
    onSearchTextChange: jest.fn(),
    searchText: jest.fn(),
    onFilterSelect: jest.fn(),
    setActiveFilter: jest.fn(),
    selectedTournament: {}
  }
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ListView {...baseProps} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
  
})
