'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import dayjs from '@/utility/dayjs';
// import CommentTextarea from './CommentTextarea';

import userImage from '@/icons/user-auth.svg';
import { ToFaNumbers, createFileURL } from '@/utility/utils';
import { User } from '@/utility/types';
import dynamic from 'next/dynamic';

import remarkGfm from 'remark-gfm';
// @ts-ignore
const Markdown = dynamic(async () => await import('react-markdown'), {
  ssr: false,
});

function SingleComment({
  time,
  comment_content,
  user,
}: {
  time: string;
  comment_content: string;
  user: User;
}) {
  // const [replystate, setReplystate] = useState(false);

  return (
    <div className="my-5 w-full rounded-2xl bg-[#232c33]  p-3 lg:px-16">
      <div className="mb-4 flex items-center">
        <div className="ml-5">
          <Image
            src={
              user.avatar
                ? createFileURL(user.id, user.collectionId, user.avatar)
                : userImage
            }
            className={`rounded-full ${!user.avatar ? 'svg-white' : ''}`}
            width={50}
            height={50}
            alt={user.username + ' profile photo'}
          />
        </div>
        <span className="mr-3 text-white">{user.username}</span>
        <span className="mr-10 text-white">
          {ToFaNumbers(dayjs(time).locale('fa').fromNow())}
        </span>
      </div>

      <div className="px-3 text-justify leading-8">
        <div className="pb-5 pt-3 text-white">
          <Markdown
            className="prose-blockquote: prose prose-slate min-w-full text-white prose-p:text-white prose-a:text-white
            prose-strong:text-white prose-pre:bg-[#0e1727] prose-table:mx-auto prose-table:text-center prose-thead:text-white prose-th:text-white prose-hr:text-white lg:prose-table:max-w-[70%]"
            remarkPlugins={[remarkGfm]}
            disallowedElements={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
            unwrapDisallowed={true}
            linkTarget={'_blank'}
          >
            {comment_content}
          </Markdown>
        </div>
      </div>

      {/* TODO: MAYBE RESPONDING TO COMMENTS ...? */}
      {/* <div className="mt-5">
        <button
          onClick={() => {
            setReplystate(!replystate);
          }}
          className="rounded-2xl bg-[darkcyan] p-3 text-white"
        >
          پاسخ به این کامنت
        </button>

        {replystate ? <CommentTextarea /> : null}
      </div> */}
    </div>
  );
}

export default SingleComment;
