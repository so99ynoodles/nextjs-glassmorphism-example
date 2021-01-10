import { useSeparator, SeparatorProps } from '@react-aria/separator';

export const Separator: React.FC<SeparatorProps> = (props) => {
  const { separatorProps } = useSeparator(props);

  return (
    <div
      {...separatorProps}
      style={{
        background: 'var(--font-color-help)',
        width: props.orientation === 'vertical' ? '1px' : '100%',
        height: props.orientation === 'vertical' ? '100%' : '1px',
        margin: props.orientation === 'vertical' ? '0 5px' : '5px 0',
      }}
    />
  );
};
