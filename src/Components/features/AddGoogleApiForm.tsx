import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import api from "../../Utils/Api"
import { useRecoilState } from "recoil";
import { loadingState } from "../../state/loading";
import { userState } from "../../state/user";
import LoadingSpinnerButton from "../UI/LoadingSpinnerButton";

const  AddGoogleApiForm : React.FC  = () => {

const [userSettings, setUserSettings] = useRecoilState(userState)
const [loading, setLoading] =  useRecoilState(loadingState)

  const SaveApiKey = async (key : string) => {
    setLoading(true);
    let result = await api.saveGoogleSecrets({ApiKey : key});
    console.log(result)
    if(result.failure)
      console.log("Erreur lors de l'appel de l'api")
    else
      setUserSettings({google : true})
    setLoading(false);
  };
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID || ""}>   
      {!loading ? (
        <div style={{"display" : "flex", "width" : "300px", "justifyContent" : "spaceBetween"}} onClick={() => setLoading(true)}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {          
            SaveApiKey(credentialResponse.credential || "")
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
         {userSettings.google === true? <p style={{"color" : "green"}}>V</p> : <p style={{"color" : "red"}}>X</p>}
        </div>
      ) : (
        <button disabled>
          <LoadingSpinnerButton />
        </button>
      )}

   
    </GoogleOAuthProvider>
  );
}

export default AddGoogleApiForm
