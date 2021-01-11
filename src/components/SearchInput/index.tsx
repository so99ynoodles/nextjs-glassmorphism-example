import styled from '@emotion/styled';
import { HTMLAttributes, useRef } from 'react';
import { useSearchField } from '@react-aria/searchfield';
import { useSearchFieldState } from '@react-stately/searchfield';
import { mq } from '../../../lib/media-query';
import { SearchIcon } from '../../assets/icons/Search';

const SearchInputContainer = styled.label`
  display: flex;
  border-radius: 2rem;
  border: 1px solid var(--border-color);
  background: rgba(var(--bg-color, 0.4));
  padding: 1rem 2rem;
  box-shadow: var(--box-shadow-lg);
  max-width: 18rem;

  @media ${mq.max.laptop} {
    padding: 0.75rem 1.5rem;
    max-width: 100%;
  }

  @media ${mq.max.mobile} {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: var(--font-color-main);
  width: 100%;

  ::placeholder {
    color: var(--font-color-help);
    font-weight: bold;
  }
`;

interface SearchInputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'onSubmit'> {
  placeholder?: string;
  onSubmit?: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  onFocus,
  onSubmit,
}) => {
  const ref = useRef(null);
  const state = useSearchFieldState({});
  const { inputProps, labelProps } = useSearchField(
    {
      placeholder,
      'aria-label': 'Search',
      onSubmit,
      onFocus,
    },
    state,
    ref
  );
  return (
    <SearchInputContainer {...labelProps}>
      <Input {...inputProps} />
      <SearchIcon size="1.5rem" subFill="transparent" />
    </SearchInputContainer>
  );
};
