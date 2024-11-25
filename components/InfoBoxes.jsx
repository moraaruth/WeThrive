import InfoBox from "./InfoBox";
const InfoBoxes = () => {
    return ( 
        <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
<InfoBox heading="Therapist"> Find a therapist around you. Bookmark therapist and contact.</InfoBox>
<InfoBox heading="Therapy session" backgroundColor="bg-blue-100"> Check the available therapy sessions and book.</InfoBox>

            
          </div>
        </div>
      </section>
    );
}
 
export default InfoBoxes;
