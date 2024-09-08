import ProjectDetailView from '@/components/views/project-detail-view'
export default function Projects() {
    const honey_details = {
        title: "honey",
        description: 
            "I've been producing music on my laptop since middle school and the idea for this project has been sitting with me for a while: a plug-in that I could use to make music with. " + 
            "Creating something simple, but also powerful has been very rewarding. Through this project, I've learned so much about audio programming, digital signal processing, and the JUCE framework.",
        tools: ["C++", "JUCE", "React.js"],
        image: "honey.png",
        link: "",
        display_link: "github.com/joshudd/honey",
    }
    return <ProjectDetailView title={honey_details.title} description={honey_details.description} tools={honey_details.tools} image={honey_details.image} link={honey_details.link} display_link={honey_details.display_link} />
}