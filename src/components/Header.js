import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { netflixLogo, supportedLanguages } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const [isBrowsePage, setIsBrowsePage] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user);
  const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            profileUrl: user.photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsuscribe();
  }, []);

  function handleLogout() {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  }

  function handleGPTSearchClick() {
    dispatch(toggleGPTSearchView());
    console.log("state changed");
  }

  function handleChangeLanguage(language) {
    dispatch(changeLanguage(language));
  }

  return (
    <div className=" w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={netflixLogo} alt="Netflix-Logo" />

      {userDetails && (
        <div className="flex p-2  gap-4 mt-2 ">


          {showGPTSearch && (
            <select
              className="bg-gray-900 p-2 m-2 text-white"
              onChange={(e) => handleChangeLanguage(e.target.value)}
            >
              {supportedLanguages.map((language) => (
                <option key={language.Identifier} value={language.Identifier}>
                  {language.Name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-purple-800 text-white py-2 px-4 m-2 rounded-lg font-bold"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch?"Home Page":"GPT Search"}
          </button>

          <img
            src={userDetails.profileUrl}
            className="w-12 h-12"
            alt="User Avataar"
          />

          <button className="text-white" onClick={handleLogout}>
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
