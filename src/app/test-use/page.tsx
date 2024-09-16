'use client';

import { Suspense, use } from 'react';

type CommentType = { id: number; content: string };

const commentsPromise = new Promise<CommentType[]>((resolve) => {
  setTimeout(() => {
    resolve([
      { id: 1, content: 'Hello' },
      { id: 2, content: 'Bye' },
    ]);
  }, 3000);
});

function Comments({
  commentsPromise,
}: {
  commentsPromise: Promise<CommentType[]>;
}) {
  // `use` will suspend until the promise resolves.
  const comments = use(commentsPromise);
  return comments.map((comment) => <p key={comment.id}>{comment.content}</p>);
}

function Page() {
  // When `use` suspends in Comments,
  // this Suspense boundary will be shown.

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise} />
      {/* <Comments commentsPromise={commentsPromise} /> */}
    </Suspense>
  );
}

export default Page;
