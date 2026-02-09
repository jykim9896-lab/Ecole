import { CSSProperties, ReactNode } from 'react';
import { textStyles, colors } from '../../utils/styles';

interface TextProps {
  children: ReactNode;
  variant?: 'body' | 'bodyBold' | 'heading' | 'subheading' | 'small';
  color?: keyof typeof colors;
  className?: string;
  style?: CSSProperties;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'div' | 'span' | 'label';
}

export function Text({ 
  children, 
  variant = 'body', 
  color = 'textSecondary',
  className = '',
  style = {},
  as: Component = 'p'
}: TextProps) {
  return (
    <Component
      className={className}
      style={{
        ...textStyles[variant],
        color: colors[color],
        ...style
      }}
    >
      {children}
    </Component>
  );
}
