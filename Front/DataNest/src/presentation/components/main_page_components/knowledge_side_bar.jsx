import KnowledgeBox from "./knowledge_box";

export default function KnowledgeSideBar(props){
    return(
        <div className="knowledge-side-bar h-full bg-gray-800 w-96 text-white flex flex-col items-center overflow-y-scroll
        ">
            <div className="knowledge-side-bar__header text-2xl my-8">
                <h1>Knowledge Base</h1>
            </div>
            {props.knowledgeList.map((knowledge)=>{
                return <KnowledgeBox newKnowledge={knowledge.newKnowledge}/>;
            })}
        </div>
    );

}