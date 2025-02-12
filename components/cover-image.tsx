import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
    src={src}
    alt={`Cover Image for ${title}`}
    className={`shadow-sm w-full ${slug ? "hover:shadow-lg transition-shadow duration-200" : ""}`}
    width={500}
    height={300}
    style={{ width: '500px', height: '300px' }} 
    priority
    
    />
  );
  console.log(image)


  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={slug} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;