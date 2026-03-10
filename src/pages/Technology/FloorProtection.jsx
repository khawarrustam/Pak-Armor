import TechLayout from '../../components/TechLayout';

export default function FloorProtection() {
    const images = [
        { src: '/Technology/FloorProtection1.jpg', alt: 'Floor Protection Armor', caption: 'Composite Armor Floor Protection' },
        { src: '/Technology/FloorProtection2.jpg', alt: 'Ballistic Floor Wrap', caption: 'Anti-Explosive Fuel Tank Protection' },
    ];

    return (
        <TechLayout title="Floor Protection" subtitle="Technology" images={images}>
            <p>
                Composite armor is sealed to the entire floor of the vehicle. Designed to absorb bomb fragmentation, armor is concealed under the carpet and seats to maintain the original appearance of each vehicle.
            </p>

            <div className="mt-6">
                <h3 className="text-brand-gold font-bold uppercase tracking-wider mb-4 text-lg">Ballistic Wraps, Anti-Explosive Fuel Tanks</h3>
                <p>
                    Designed to suppress explosions which may occur in the fuel tank. Ballistic wrap Anti-Explosive Fuel Tanks are installed on all vehicles as part of our standard package.
                </p>
            </div>
        </TechLayout>
    );
}
