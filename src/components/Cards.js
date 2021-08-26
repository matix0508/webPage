import Card from "./Card";

export default function Cards(props) {
    return (

        <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
            <Card
                title={"Applied Physics AGH Kraków"}
            >
                Student of Applied Physics on the University of Science and Technology

            </Card>
            <Card
                title={"Developer at AGH Solar Plane"}
            >
                Software Developer in Academic Student Group AGH Solar Plane
            </Card>
        </div>

    )
}