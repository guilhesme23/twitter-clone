import { SearchIcon } from 'components/SideMenu/styles';
import React from 'react';
import { Container, SearchBar } from './styles';

const SideCard: React.FC = () => {
  return (
    <Container>
        <SearchBar>
            <div>
                <span><SearchIcon /></span>
                <input type="text" placeholder='Search Twitter' />
            </div>
        </SearchBar>
    </Container>
    );
}

export default SideCard;