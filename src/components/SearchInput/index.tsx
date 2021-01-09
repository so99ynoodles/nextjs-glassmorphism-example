import styled from '@emotion/styled';
import { HTMLAttributes, useRef } from 'react';
import { useSearchField } from '@react-aria/searchfield';
import { useSearchFieldState } from '@react-stately/searchfield';
import { mq } from '../../../lib/media-query';
import { SearchIcon } from '../../icons/Search';
import { VisuallyHidden } from '@react-aria/visually-hidden';

const SearchInputContainer = styled.div`
  display: flex;
  border-radius: 2rem;
  background: rgba(var(--bg-color, 0.4));
  padding: 1rem 2rem;
  box-shadow: var(--box-shadow-md);

  @media ${mq.max.laptop} {
    padding: 0.75rem 1.5rem;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: var(--font-color-sub);
  width: 100%;

  ::placeholder {
    color: var(--font-color-help);
    font-weight: bold;
  }
`;

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
}) => {
  const ref = useRef(null);
  const state = useSearchFieldState({});
  const { inputProps, labelProps } = useSearchField(
    {
      placeholder,
      id: 'Search',
      'aria-label': 'Search',
      onSubmit: (value) => console.log(value),
    },
    state,
    ref
  );
  return (
    <SearchInputContainer role="Search">
      <VisuallyHidden>
        <label {...labelProps}>Search</label>
      </VisuallyHidden>
      <Input {...inputProps} />
      <SearchIcon size="1.5rem" subFill="transparent" />
    </SearchInputContainer>
  );
};
