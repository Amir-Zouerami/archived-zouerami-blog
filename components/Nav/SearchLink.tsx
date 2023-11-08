'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import search from '@/icons/search.svg';

function SearchLink() {
  const [searchModal, setSearchModal] = useState(true);
  // TODO: Make Pretty

  return (
    <>
      <div
        className={`${
          searchModal && 'hidden'
        } fixed right-0 top-0 z-50 flex min-h-[100vh] min-w-[100vw]
        flex-col items-center justify-center bg-[#293036] bg-opacity-[0.95] lg:flex-row`}
      >
        <input
          className="w-[90%] rounded-xl px-5 py-5 font-bold lg:w-1/2"
          type="search"
          name="search"
          id="search"
          placeholder="مطلب مورد نظرتان را جست و جو کنید..."
        />
        <div>
          <input
            className="my-5 ml-5 rounded-xl bg-gradient-to-r from-[#3E5151] to-[#80755f] px-5 py-5 font-semibold lg:mr-5"
            type="submit"
            value="جست و جو"
          />

          <Link
            className="rounded-xl bg-gradient-to-r from-[#1D4350] to-[#A43931] px-5 py-5 font-semibold"
            href={'#'}
            onClick={() => {
              setSearchModal(!searchModal);
            }}
          >
            بستن صفحه
          </Link>
        </div>
      </div>

      <Link
        href={'#'}
        className="transition-transform hover:scale-150 hover:animate-pulse"
        onClick={() => {
          setSearchModal(!searchModal);
        }}
      >
        <Image
          src={search}
          alt="search button"
          width={25}
          className="dark:invert"
        />
      </Link>
    </>
  );
}

export default SearchLink;
