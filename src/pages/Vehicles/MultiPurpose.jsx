import VehicleLayout from '../../components/VehicleLayout';

export default function MultiPurpose() {
    const description = (
        <>
            UQAAB designed for Military Personnel and VIP Transport. Full Vehicle is protected with certified CEN B7 / NIJ IV Armor; Carry up to 8 soldiers with full equipment. Also equipped with several armored enhancements, such as a blast mitigation floor mat, provided with a roof turret, .30 or .50 CAL Machine Guns, seven springs loaded gun-ports are integrated at each seat.
            <br /><br />
            Heating, ventilation and air conditioning system, automatic fire engine suppression system and heavy duty 300 AMP alternator.
        </>
    );

    const features = [
        "Transparent Armor: B7 (7.62 x 51 API)",
        "Replace OEM glass with curved & flat ballistic glass.",
        "All ballistic glass is rated to B7 standards.",
        "Armor: B7 Armour Materials (7.62 x 51 API)"
    ];

    return (
        <VehicleLayout
            title="MULTI PURPOSE VEHICLES"
            description={description}
            features={features}
            protectionLevel="B6" // Screenshot says Level B6 but "Available on request B5" something like that. B6 is checked.
            // Using a local image
            imageSrc="/Products/Multi Purpose Vehicles.png"
            flipLayout={true}
        />
    );
}
