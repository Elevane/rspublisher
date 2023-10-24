import { useRecoilState } from "recoil"
import { loadingState } from "../../state/loading"
import LoadingSpinnerButton from "../UI/LoadingSpinnerButton"


 const PublishContentButton : React.FC =() => {
  const [loading, setLoading] =  useRecoilState(loadingState)
const PublishContent = () => {
    setLoading(true)   
  return fetch("https://localhost:7167/Youtube/Publish" , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
        }
      }).then((data) => {
        
        if (data.status !== 200)
            alert("Erreur dans l'object de retour")
        setLoading(false)
    }); 
 }
    return (
        <form>
         { !loading ? <button  type="button" onClick={() =>PublishContent()}>Publier</button> : <button disabled><LoadingSpinnerButton /></button>}
        </form> 
    )
}

export default PublishContentButton