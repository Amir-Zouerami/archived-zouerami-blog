import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileMenuLinkProps {
  icon: StaticImport;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

function ProfileMenuLink({
  icon,
  title,
  subtitle,
  onClick,
}: ProfileMenuLinkProps) {
  return (
    <div onClick={onClick}>
      <Link href={'#'} className="flex py-5 hover:opacity-[0.7]">
        <Image
          src={icon}
          style={{ width: '35px', height: '35px' }}
          alt="see your liked articles"
        />
        <div className="mr-3">
          <p className="font-bold text-white">{title}</p>
          <p className="py-1 text-sm text-gray-400">{subtitle}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProfileMenuLink;
