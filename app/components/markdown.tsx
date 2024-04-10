import { Suspense, lazy, FC, memo } from 'react';
// Assuming Options type is available in your project, otherwise, you'll need to define it
import type { Options } from 'react-markdown';

// Dynamically import ReactMarkdown
const ReactMarkdownAsync = lazy(() => import('react-markdown'));

const MemoizedReactMarkdown: FC<Options> = memo(
  (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactMarkdownAsync {...props} />
    </Suspense>
  ),
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
);

export { MemoizedReactMarkdown };

// import { FC, memo } from 'react'
// import ReactMarkdown, { Options } from 'react-markdown'

// export const MemoizedReactMarkdown: FC<Options> = memo(
//   ReactMarkdown,
//   (prevProps, nextProps) =>
//     prevProps.children === nextProps.children &&
//     prevProps.className === nextProps.className
// )
