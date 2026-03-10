import VehicleLayout from '../../components/VehicleLayout';

export default function CashAndTransit() {
    const description = (
        <>
            Pak Armoring is dedicated to creating some of the most secure Cash-in-Transit vehicles on the market today. Our vehicle is trusted by many corporate customers like money exchange companies and multi-national companies to transport their cash and assets.
            <br /><br />
            Our team can customize any chassis or vehicle to give the best protections possible for your needs.
        </>
    );

    const features = [
        "Vertical panel protection",
        "Certified bullet resistance glass and steel",
        "Roof protection",
        "Doors overlap protection",
        "Upgraded suspension and brakes",
        "Electronic security area",
        "Base to vehicle communication",
        "Mechanical and electronic controls",
        "Security cameras 360° video surveillance and recording"
    ];

    return (
        <VehicleLayout
            title="CASH AND TRANSIT"
            description={description}
            features={features}
            protectionLevel="B4"
            // Using a local armored van image
            imageSrc="/Products/CashnTransit.png"
            flipLayout={true}
        />
    );
}
