import VehicleLayout from '../../components/VehicleLayout';

export default function LawInForces() {
    const description = (
        <>
            Sagr Pak Armoring Pvt Ltd is proud to introduce the Armored Personnel Carrier (APC), a vehicle armoring solution specifically designed and engineered for Law Enforcement personnel transportation in Pakistan. This is built on a heavy duty chassis, equipped with a powerful 200 horsepower, 4.5L V8 engine, and 5 - speed Manual transmission 423400rpm.
            <br /><br />
            The APC is an 8 person, multi-purpose tactical vehicle designed to carry troops to dangerous destinations. Mono-hull built on a Toyota Chassis; the versatile APC offers superior protection against guns and rifles, making it ideal for high risk areas prone to clashes and ambush. With 4x4 wheel drive action, it is possible for the vehicle to reach remote, difficult-to-access places.
        </>
    );

    const features = [
        "Transparent Armor: B6 (7.62 x 51)",
        "Replace OEM glass with curved & flat ballistic glass.",
        "All ballistic glass is rated to B6 standards.",
        "Armor: B6 Armour Materials (7.62 x 51 NATO)"
    ];

    return (
        <VehicleLayout
            title="LAW IN FORCES"
            description={description}
            features={features}
            protectionLevel="B6"
            // Using the designated local image for APC
            imageSrc="/Products/Law In Forces.png"
        />
    );
}
