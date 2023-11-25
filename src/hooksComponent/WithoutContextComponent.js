import { useState, createContext, useContext, useEffect, useRef } from "react";
const LegacyContext = createContext();

export default function GrandParent() {
    let [surName, setSurName] = useState("Gupta");
    let [village, setVillage] = useState("Haryana");
    let [color, setColor] = useState("red");
    
    useEffect(() => {
        if (sessionStorage.getItem("surName") && sessionStorage.getItem("village")) {
            setSurName(sessionStorage.getItem("surName"));
            setVillage(sessionStorage.getItem("village"))
        }
        debugger;
    }, [])
    
    useEffect(() => {
        sessionStorage.setItem("surName", surName)
        sessionStorage.setItem("village", village)
    }, [surName, village])
    
    function changeSurName() {
        setSurName("Goel")
        setVillage("UP")
        setColor("green");
    }
    
    return (
        <LegacyContext.Provider value={{userSurName: surName, userVillage: village, changeSurName: changeSurName}}>
            <h1>Grand Parent Surname is {surName}</h1>
            <h1>Parent Village is {village}</h1>
            <input type="button" onClick={changeSurName} value="Change SurName" /><hr />
            <Parent surName={surName}></Parent>
        </LegacyContext.Provider>
        
    )
}

function Parent() {
    return (
        <>
            <h2>This is Parent Component</h2><hr />
            <Children></Children>
        </>
    )
}

function Children() {
    return (
        <>
            <h3>This is Child Component</h3><hr />
            <GrandChildren></GrandChildren>
        </>
    )
}

function GrandChildren() {
    const componentReference = useRef()
    var legacyData = useContext(LegacyContext)
    
    function changeColor() {
        debugger;
        componentReference.current.style.color = "green";
    }
    
    return (
        <>
            <h4 ref={componentReference}>This is Grand Child Component {legacyData.userSurName} {legacyData.userVillage}</h4>
            <input type="button" onClick={legacyData.changeSurName} value="Change SurName" />
            <input type="button" onClick={changeColor} value="Change Color" /><hr />
        </>
    )
}