import styled from '@emotion/styled';
import { useRadioGroup, useRadio } from '@react-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useRadioGroupState } from '@react-stately/radio';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { changeMode } from '../../utils/colorMode';

const RadioContext = React.createContext(null);

const RadioGroup = styled.div`
  display: flex;
`;
const LabelCard = styled.label<{ isSelected?: boolean }>`
  background: ${(props) =>
    props.isSelected
      ? 'rgba(var(--bg-color), 0.9)'
      : 'rgba(var(--bg-color), 0.3)'};
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  box-shadow: var(--box-shadow-md), var(--box-shadow-lg);
  padding: 1rem;
  width: 3rem;
  height: 3rem;
  max-width: 3rem;
  max-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.isSelected ? 'not-allowed' : 'pointer')};
  margin-top: 1rem;
  margin-right: 1rem;
`;

export function ModeRadio() {
  let state = useRadioGroupState({
    defaultValue: document.documentElement.getAttribute('theme'),
    onChange: (value: string) => changeMode(value as 'light' | 'dark'),
  });
  let { radioGroupProps } = useRadioGroup(
    {
      'aria-label': 'theme mode setting',
    },
    state
  );

  return (
    <RadioGroup {...radioGroupProps}>
      <RadioContext.Provider value={state}>
        <Radio value="light">
          <FaSun
            fill={state.selectedValue === 'light' ? 'orange' : 'gray'}
            width="2rem"
            height="2rem"
          />
        </Radio>
        <Radio value="dark">
          <FaMoon
            fill={state.selectedValue === 'dark' ? 'yellow' : 'gray'}
            width="2rem"
            height="2rem"
          />
        </Radio>
      </RadioContext.Provider>
    </RadioGroup>
  );
}

function Radio(props) {
  const { children } = props;
  const state = React.useContext(RadioContext);
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, state, ref);

  return (
    <LabelCard isSelected={state.selectedValue === props.value}>
      <VisuallyHidden>
        {`${props.value} mode`}
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      {children}
    </LabelCard>
  );
}
