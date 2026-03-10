import TechLayout from '../../components/TechLayout';

export default function Suspension() {
    const images = [
        { src: '/Technology/SuspensionShocksBrakes-1.jpg', alt: 'Heavy Duty Suspension', caption: 'Progressive Suspension System' },
        { src: '/Technology/SuspensionShocksBrakes2.jpg', alt: 'Suspension Components', caption: 'Heavy Duty Components' },
    ];

    return (
        <TechLayout title="Suspension" subtitle="Technology" images={images}>
            <p>
                We have a progressive suspension system where shocks, coil springs, leaf springs and bushes are replaced with heavy duty suspension components specially made to evenly distribute the weight of armored vehicle as necessary to compensate for additional weight of the vehicle.
            </p>
            <p>
                Rotors and brake pads of an armored vehicle are replaced with specially manufactured rotors and ceramic brake pads designed to withstand excessive temperatures generated and reinforce dynamic forces of the armored vehicles.
            </p>
        </TechLayout>
    );
}
