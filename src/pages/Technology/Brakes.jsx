import TechLayout from '../../components/TechLayout';

export default function Brakes() {
    const images = [
        { src: '/Technology/Brakes.jpg', alt: 'Heavy Duty Brakes', caption: 'Ceramic Brake Pads & Rotors' },
    ];

    return (
        <TechLayout title="Brakes" subtitle="Technology" images={images}>
            <p>
                We have a progressive suspension system where shocks, coil springs, leaf springs and bushes are replaced with heavy duty suspension components specially made to evenly distribute the weight of armored vehicle as necessary to compensate for additional weight of the vehicle.
            </p>
            <p>
                Rotors and brake pads of an armored vehicle are replaced with specially manufactured rotors and ceramic brake pads designed to withstand excessive temperatures generated and reinforce dynamic forces of the armored vehicles.
            </p>
        </TechLayout>
    );
}
