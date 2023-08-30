import Image from 'next/image';

import telegram from '@/icons/telegram.svg';
import linkedin from '@/icons/linkedin.svg';
import instagram from '@/icons/instagram.svg';
import x from '@/icons/x.svg';
import facebook from '@/icons/facebook.svg';
import Link from 'next/link';

function FooterSocials() {
  return (
    <div className="flex justify-center gap-9 md:gap-32">
      <Link href={'#'} className="hover:animate-bounce">
        <Image
          src={telegram}
          width={40}
          alt="My Page on Telegram"
          className="dark:invert"
        />
      </Link>
      <Link href={'#'} className="hover:animate-bounce">
        <Image
          src={linkedin}
          width={40}
          alt="My Page on LinkedIn"
          className="dark:invert"
        />
      </Link>
      <Link href={'#'} className="hover:animate-bounce">
        <Image
          src={instagram}
          width={40}
          alt="My Page on Instagram"
          className="dark:invert"
        />
      </Link>
      <Link href={'#'} className="hover:animate-bounce">
        <Image
          src={x}
          width={30}
          alt="My Page on X (Twitter)"
          className="dark:invert"
        />
      </Link>
      <Link href={'#'} className="hover:animate-bounce">
        <Image
          src={facebook}
          width={40}
          alt="My Page on Facebook"
          className="dark:invert"
        />
      </Link>
    </div>
  );
}

export default FooterSocials;
