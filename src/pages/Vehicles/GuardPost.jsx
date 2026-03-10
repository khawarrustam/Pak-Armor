import VehicleLayout from '../../components/VehicleLayout';

export default function GuardPost() {
    const description = (
        <>
            Working within the customer's budget and operational guidelines, enhanced security features can be incorporated into any current situation. HADEED is the most advanced state of the art personal protective barrier ever designed.
            <br /><br />
            This system is designed to replace sandbag and concrete emplacements that offer little in ballistic protection and is impervious to sun and saltwater breakdown. It is available in custom sizes to meet the client's needs.
        </>
    );

    return (
        <VehicleLayout
            title="GUARD POST"
            description={description}
            protectionLevel="B6"
            // Using a local image
            imageSrc="/Products/GuardPost.png"
        />
    );
}
