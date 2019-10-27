import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import '../../styles/prism-atom-dark.css';

export default function Code({ children, className }) {
  const language = className.replace(/language-/, '');
  const { Prism } = defaultProps;

  return (
    <Highlight Prism={Prism} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: '20px', overflowX: 'scroll' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
