import Image from 'next/image';

function BlogPostImage({ href, caption }: { href: string; caption: string }) {
  return (
    <figure className="my-10 text-center">
      <Image
        src={href}
        alt={caption}
        width={0}
        height={0}
        sizes="100%"
        className="min-w-[600px] mx-auto w-auto rounded-xl"
      />
      <figcaption className="pt-3 text-sm text-slate-400 lg:text-base">
        {caption}
      </figcaption>
    </figure>
  );
}

export default BlogPostImage;
