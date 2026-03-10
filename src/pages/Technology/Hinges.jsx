import TechLayout from '../../components/TechLayout';

export default function Hinges() {
    const images = [
        { src: '/Technology/Hinges-1.jpg', alt: 'Heavy Duty Hinges', caption: 'Single Piece Unit Hinges' },
    ];

    return (
        <TechLayout title="Hinges" subtitle="Technology" images={images}>
            <p>
                High-end Hinges installed to accommodate the extra weight of Armoring. These Hinges are single piece unit to ensure long lasting impact.
            </p>
        </TechLayout>
    );
}
