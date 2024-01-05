import { Project } from "@/types/project";
import HorizontalScrollCarousel from "./horizontal-scroll-carousel";
const HorizontalScrollCarouselProjects = async () => {
    const response = await fetch(`${process.env.BACKEND_URL}/api/projects`, { next: { revalidate: 3600 } })
    const data = await (response.json()) as Project[];
    return (

        <HorizontalScrollCarousel projects={data} />

    );
};


export default HorizontalScrollCarouselProjects