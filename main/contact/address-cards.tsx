import { MapPin } from "lucide-react";

// Address data structure
type AddressData = {
    id: number;
    address: string;
};

// Sample address data
const addressesData: AddressData[] = [
    {
        id: 1,
        address:
            "Pantharam Tower, 4th floor, Eranhipalam, Kerala, 673021, Above Skoda Showroom",
    },
    {
        id: 2,
        address: "Anachukattu Palayatham, Kochi, Ernakulam, Kerala, 682028",
    },
    {
        id: 3,
        address:
            "Delta Arcade, Medical College Rd, Chevaroor, Kozhikode, Kerala, 673017",
    },
];

export default function AddressCards() {
    return (
        <div className="min-h-[200px] grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto px-4 py-8">
            {addressesData.map((item) => (
                <AddressCard key={item.id} address={item.address} />
            ))}
        </div>
    );
}

function AddressCard({ address }: { address: string }) {
    return (
        <div className="bg-[#00565a] rounded-lg p-6 flex items-start gap-3 text-sm min-h-[130px] w-full shadow-lg">
            <div className="mt-1">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#00565a]" />
                </div>
            </div>
            <div className="text-gray-200">{address}</div>
        </div>
    );
}
