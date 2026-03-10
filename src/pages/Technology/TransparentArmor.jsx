import TechLayout from '../../components/TechLayout';

export default function TransparentArmor() {
    const images = [
        { src: '/Technology/TransparentArmor1.jpeg', alt: 'Transparent Armor Glass', caption: 'Lightweight Transparent Armor' },
        { src: '/Technology/TransparentArmor2.jpeg', alt: 'Ballistic Glass Installation', caption: 'Distortion-Free Ballistic Glass' },
    ];

    return (
        <TechLayout title="Transparent Armor" subtitle="Technology" images={images}>
            <p>
                Referred to as Lightweight Transparent Armor, Pak Armoring Glass provides a superior level of protection against the toughest security concerns, from random acts of street violence to Head of State protection. Pak Armoring windows are composites of glass and polycarbonate substrates laminated with inter layers, created to absorb energy from various ballistic threats.
            </p>

            <div className="mt-6 mb-6">
                <h3 className="text-brand-gold font-bold uppercase tracking-wider mb-4 text-lg">The Armored Glass Design Is:</h3>
                <ul className="space-y-3">
                    {[
                        'Distortion-free',
                        'Designed to look like conventional automotive glass',
                        'Lighter and thinner than all-glass laminates or air-gap designs',
                        'Unaffected by temperature fluctuations',
                        'Offers dependable protection against a variety of lethal weapons',
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-brand-gray/90">
                            <span className="text-brand-gold mt-1 text-lg">✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <p>
                Pak Armoring replaces all existing glass with matching curved glass, providing maximum security, superior optics, light-weight construction and longer service life.
            </p>
        </TechLayout>
    );
}
