import { useState } from "react";
import { getKnowledgeBasedInformation, getFilteredInformation } from "../dataNestService";

export const useGetKnowledge = () => {
  const [ isLoading, setLoading ] = useState(false);

  const getKnowledgeBased = async (message) => {
    setLoading(true);

    return await getKnowledgeBasedInformation(message)
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

    return await getFilteredInformation(message)
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
