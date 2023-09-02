
async function addKnowledge(user, newKnowledge) {
    try {
        user.knowledge.push( { newKnowledge });
        await user.save();
        return { knowledge: "Added Successfully" };
      } catch (error) {
        return { error: error}; // You can choose to handle or propagate the error as needed
      }
  }

async function getKnowledge(user, knowledgeId) {
      try{
        const previousKnowledge = user.knowledge.id(knowledgeId);
        return previousKnowledge ;  
    }
      catch(error){
        return { error: error}; 
      }
}

async function getAllKnowledge(user) {
      try {
        return user.knowledge;
      }
        catch(error){
            return { error: error}; 
     }
}


async function deleteKnowledge(user,  knowledgeId ) {
   try{
    const knowledge = user.knowledge.id(knowledgeId);
    user.knowledge.pull(knowledge);
    await user.save();
    return { knowledge: "Deleted Successfully" };
   }
   catch(error){
    return { error: error.message}; 
   }
  }

async function updateKnowledge(user, knowledgeId, updateKnowledge ){
  
    try{
        const knowledge = user.knowledge.id(knowledgeId);
        knowledge.newKnowledge = updateKnowledge;
        await user.save();
        return { knowledge: "Updated Successfully" };
    }
    catch(error){
        return { error: error.message}; 
    }
}
 
module.exports = { 
    addKnowledge,
    getKnowledge,
    getAllKnowledge,
    deleteKnowledge,
    updateKnowledge
 }