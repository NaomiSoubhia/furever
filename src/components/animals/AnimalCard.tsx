import Link from "next/link";

interface DummyAnimals {
    id: number;
    name: string;
    species: string;
    breed: string;
    age: number;
    status: string;
    image: string;
}


interface AnimalCardProps {
    animal: DummyAnimals;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
    return (
<div className="bg-white rounded-lg shadow-md overflow-hidden group">
  <Link
    href={`/animals/${animal.id}`}
    className="block overflow-hidden"
  >
    <img
      src={animal.image}
      alt={animal.name}
      className="w-full h-48 object-cover   will-change-transform  transition-transform duration-300 ease-out  transform-gpu  group-hover:scale-110"
    />
  </Link>

  <div className="p-4">
    <h3 className="text-lg font-bold transition-colors group-hover:text-accent">
      {animal.name}
    </h3>
    <p className="text-gray-600 my-1">
      {animal.species} • {animal.breed}
    </p>
    <p className="text-gray-500">Age: {animal.age}</p>
  </div>
</div>
    );
}
