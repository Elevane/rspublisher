import LoadingSpinnerButton from "../UI/LoadingSpinnerButton"


export default function PublishContentButton({loading, setLoading}){
    
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
        
        if (!data.status  === 200)
            alert("Erreur dans l'object de retour")
        setLoading(false)
    }); 
 }
    return (
        <form>
         { !loading ? <button  type="button" onClick={() =>PublishContent()}>Publier</button> : <button disabled><LoadingSpinnerButton></LoadingSpinnerButton></button>}
        </form> 
    )
}