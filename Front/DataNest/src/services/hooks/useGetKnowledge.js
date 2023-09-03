import { useState } from "react";
import { getSearchKnowledgeBasedInformation, getSearchNewsKnowledgeBasedInformation } from "../dataNestService";

export const useGetKnowledge = () => {
  const [ isLoading, setLoading ] = useState(false);

  const getKnowledgeBased = async (message) => {
    setLoading(true);

    return await getSearchNewsKnowledgeBasedInformation(message)
    .then((response)=>{
      setLoading(false);
      return response;
    })
    .catch((error)=>{
      setLoading(false);
      console.log(error);
    });
  }

  const getFiltered = async (message) => {
    setLoading(true);

    return await getSearchKnowledgeBasedInformation(message)
    .then((response)=>{
      setLoading(false);
      return response;
    })
    .catch((error)=>{
      setLoading(false);
      console.log(error);
    });
  }

  return { isLoading, getKnowledgeBased, getFiltered };
}
