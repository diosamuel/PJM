import Link from 'next/link';
export default function TestimonialCard({ name, description, stars }) {
  return (
    <div className="flex flex-col border shadow hover:shadow-xl rounded-lg p-5 w-[20em] text-center items-center">
      <img src="/assets/person.png" className="w-10 h-10 mb-3" />
      <h3 className="font-semibold">{name}</h3>
      <div className="flex gap-1 my-2 text-yellow-400">
        {[...new Array(Number(stars))].map((n) => (
          <i key={n} className="fa-solid fa-star"></i>
        ))}
      </div>
      <p>
        {description
          ? description
          : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod scelerisque enim, eget tincidunt leo scelerisque id. Nam id congue ligula'}
      </p>
    </div>
  );
}
