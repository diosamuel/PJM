import Link from 'next/link';
export default function Breadcrumb({ pages, className }) {
  return (
    <div className={`container flex items-center gap-3 ${className}`}>
      <Link href="/" className="text-primary text-base">
        <i className="fa-solid fa-house"></i>
      </Link>
      {pages.map((page) => (
        <>
          <span className="text-sm text-gray-400">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <p className="text-gray-600 font-medium">{page}</p>
        </>
      ))}
    </div>
  );
}
