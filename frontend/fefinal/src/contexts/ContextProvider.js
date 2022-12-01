import React, {createContext,useContext,useState,useEffect} from 'react';
import axios from '../auth/UserActions'

import Cookies from 'universal-cookie';

const StateContext = createContext();
const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}



export const ContextProvider = ({children}) => {

    var color = localStorage.getItem('ColorMode');

    var mode = localStorage.getItem('ThemeMode');
    const cookies = new Cookies();

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [currentColor, setcurrentColor] = useState(color === null ? '#03c9d7' : color)
    const [currentMode, setcurrentMode] = useState(mode === null ? 'Light' : mode);
    const [themeSettings, setThemeSettings] = useState(false);

    const token = cookies.get('token');
    const tokenref = cookies.get('tokenref');
    const uid = cookies.get('uid');

    //ujian
    const [ujianDurasi, setujianDurasi] = useState();
    const [ujianNama, setujianNama] = useState();
    const [ujianSoal, setujianSoal] = useState([]);

    const [formid, setformid] = useState()
    //ujian end
    //edit kelas
    const [kelasAdd, setkelasAdd] = useState();
    const [kelasNama, setkelasNama] = useState();
    const [kelasDesk, setkelasDesk] = useState();
    const [kelasId, setkelasId] = useState();
    const [kelasForms, setkelasForms] = useState();
    //add kelas
    const[kelasu, setkelasu] = useState([])
    //add post 
    const[postu, setpostu] = useState([])
    const[postadd, setpostadd] = useState(false)
    //edit kelas end
     //edit Form
     const [formNama, setformNama] = useState();
     const [formId, setformId] = useState();
     const [formDesc, setformDesc] = useState();

     //add form
     const [addformnama, setaddformnama] = useState()
     const [addformid, setaddformid] = useState()

     const [addchange, setchange] = useState()
     //edit Form end
     //Login
     var [akunNama, setakunNama] = useState()
     var [akunRole, setakunRole] = useState()
        var [akunClass, setakunClass] = useState()
        var [akunEmail, setakunEmail] = useState()

    //xoooooooooooooooooooooo
    const [loggg, setloggg] = useState()
    //xoooooooooooooooooooooo
     akunClass = cookies.get('class');
     akunRole = cookies.get('role');
     akunNama = cookies.get('name');
     akunEmail = cookies.get('email');
    

     var co = [];
     console.log(formid)
     console.log(co)

    
    
    const setMode = (e) => {
        setcurrentMode(e.target.value);

        localStorage.setItem('ThemeMode',e.target.value)
        setThemeSettings(false)
    }

    const setColor= (e) => {
        setcurrentColor(e);

        localStorage.setItem('ColorMode',e)
         setThemeSettings(false)   
    }

    const setUjian= (a) => {
        setformid(a)
        

        //localStorage.setItem('ColorMode',e)
  
    }

    

    const setKelas= (a,b,c,d) => {
        setkelasNama(a);
        setkelasDesk(b)
        setkelasId(c)
        setkelasForms(d)
    }

    const getKelas = async() => {
        const response = await axios.get('/classes',
        {headers:{
            Authorization: `Bearer ${tokenref}`
        }
    });
    
        
    
        setkelasu(response.data);
        console.log(kelasu)
    }

    const getPost = async() => {
        const response = await axios.get('/post',
        {headers:{
            Authorization: `Bearer ${tokenref}`
        }
    });
    
        
    
        setpostu(response.data);
        console.log(postu)
    }
    

    const setForm= (b) => {
      
        setformId(b);
 
        
    }

    const addForm = (b) => {
        setaddformid(b);
    }

    

    const handleClick =(clicked) => {
        setIsClicked({...initialState,[clicked]:true});
    }
    const [screenSize, setscreenSize] = useState(undefined)
    
    
    return (
    <StateContext.Provider value={{
        loggg,setloggg,co,

        formid,setformid,

        kelasu,setkelasu,

        postu,setpostu,getPost,
        postadd,setpostadd,

        activeMenu,setActiveMenu,
        isClicked,setIsClicked,
        handleClick,
        screenSize,setscreenSize,
        currentColor,currentMode,
        setcurrentColor,setcurrentMode,
        themeSettings,setThemeSettings,
        setColor,setMode,
        ujianSoal,setujianSoal,setUjian,
        ujianDurasi,setujianDurasi,
        ujianNama,setujianNama,
        kelasNama,setkelasNama,setKelas,kelasId,kelasForms,setkelasForms,
        formNama,setformNama,setForm,
        akunNama,
        akunClass,
        akunRole,
        akunEmail,
        uid,cookies,
        kelasAdd,setkelasAdd,kelasDesk,
        tokenref,token,
        addchange,setchange,
        addformnama,addformid,
        setformNama,setaddformid,addForm,
        //form edit
        setaddformid,formId,formDesc,setformDesc,

        getKelas,cookies
        }}>
        {children}
    </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);