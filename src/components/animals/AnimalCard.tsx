import Link from "next/link";

interface DummyAnimals {
    id: number;
    name: string;
    species: string;
    breed: string;
    age: number;
    image: string;
}


interface AnimalCardProps {
    animal: DummyAnimals;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold">{animal.name}</h3>
                <p className="text-gray-600">{animal.species} • {animal.breed}</p>
                <p className="text-gray-500">Age: {animal.age}</p>
                <Link href={`/animals/${animal.id}`} className="inline-flex items-center  rounded-lg items-center justify-center rounded-md 
            text-sm font-medium text-white bg-primary transition hover:bg-primary-hover px-4 py-2
            my-2">
                    Adopt Me!
                </Link>
            </div>
        </div>
    );
}
