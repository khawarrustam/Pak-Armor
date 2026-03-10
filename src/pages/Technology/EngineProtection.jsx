import TechLayout from '../../components/TechLayout';

export default function EngineProtection() {
    const images = [
        { src: '/Technology/EngineProtection.jpg', alt: 'Engine Protection', caption: 'Concealed Bumper Protection' },
        { src: '/Technology/EngineProtection1.jpg', alt: 'Front Bumper Protection', caption: 'Front Ram Protection System' },
        { src: '/Technology/EngineProtection2.jpg', alt: 'Rear Bumper Protection', caption: 'Rear Ram Protection System' },
    ];

    return (
        <TechLayout title="Engine Protection" subtitle="Technology" images={images}>
            <p>
                Concealed behind both the front and the rear bumpers, this option allows each vehicle to ram their way out of a dangerous situation without causing in-operable damage (to the armored vehicle). In addition, this modification prohibits corners of the vehicle from being rammed into the tires, thus making the armored vehicle inoperable.
            </p>
        </TechLayout>
    );
}
