import { useState } from "react";

const arr=[
  { ad: "Elvin", soyad: "Quliyev", maas: 1200, yas: 28, staj: 5, saha: "Frontend" },
  { ad: "Kamran", soyad: "Əliyev", maas: 1500, yas: 32, staj: 8, saha: "Backend" },
  { ad: "Nicat", soyad: "Hüseynov", maas: 1100, yas: 26, staj: 4, saha: "Mobile" },
  { ad: "Murad", soyad: "İbrahimov", maas: 1700, yas: 34, staj: 9, saha: "DevOps" },
  { ad: "Orxan", soyad: "Səfərov", maas: 900, yas: 24, staj: 2, saha: "Design" },
  { ad: "Rauf", soyad: "Rzayev", maas: 1400, yas: 30, staj: 6, saha: "Data Science" },
  { ad: "Tural", soyad: "Məmmədov", maas: 1300, yas: 29, staj: 5, saha: "Frontend" },
  { ad: "Zaur", soyad: "Ələkbərov", maas: 1250, yas: 27, staj: 4, saha: "QA" },
  { ad: "Samir", soyad: "Babayev", maas: 1600, yas: 33, staj: 7, saha: "Backend" },
  { ad: "Fuad", soyad: "Kazımov", maas: 1000, yas: 25, staj: 3, saha: "Mobile" },
  { ad: "Vüsal", soyad: "Tağıyev", maas: 1350, yas: 30, staj: 6, saha: "Frontend" },
  { ad: "Emin", soyad: "Əhmədov", maas: 1450, yas: 31, staj: 7, saha: "DevOps" },
  { ad: "Nurlan", soyad: "Süleymanov", maas: 950, yas: 23, staj: 2, saha: "Design" },
  { ad: "Cavid", soyad: "Qasımov", maas: 1700, yas: 35, staj: 10, saha: "Backend" },
  { ad: "Rəşad", soyad: "Əzizov", maas: 1200, yas: 28, staj: 5, saha: "Data Science" },
  { ad: "Fərid", soyad: "Nağıyev", maas: 1300, yas: 29, staj: 6, saha: "QA" },
  { ad: "Sahil", soyad: "İsmayılov", maas: 1050, yas: 26, staj: 3, saha: "Frontend" },
  { ad: "Əli", soyad: "Səmədov", maas: 1500, yas: 32, staj: 8, saha: "Backend" },
  { ad: "İlqar", soyad: "Həsənov", maas: 1100, yas: 27, staj: 4, saha: "Mobile" },
  { ad: "Tofiq", soyad: "Əliyev", maas: 1600, yas: 34, staj: 9, saha: "DevOps" },
  { ad: "Süleyman", soyad: "Zeynalov", maas: 980, yas: 24, staj: 2, saha: "Design" },
  { ad: "İbrahim", soyad: "Qəhrəmanov", maas: 1400, yas: 30, staj: 6, saha: "Data Science" },
  { ad: "Məmməd", soyad: "Ələsgerov", maas: 1300, yas: 28, staj: 5, saha: "Frontend" },
  { ad: "Ramin", soyad: "Şükürov", maas: 1250, yas: 27, staj: 4, saha: "QA" },
  { ad: "Sadiq", soyad: "Orucov", maas: 1500, yas: 33, staj: 8, saha: "Backend" },
  { ad: "Xəyal", soyad: "Namazov", maas: 1020, yas: 25, staj: 3, saha: "Mobile" },
  { ad: "Əhməd", soyad: "Rəhimov", maas: 1350, yas: 29, staj: 6, saha: "Frontend" },
  { ad: "Teymur", soyad: "Fətəliyev", maas: 1450, yas: 31, staj: 7, saha: "DevOps" },
  { ad: "Elçin", soyad: "Qarayev", maas: 990, yas: 23, staj: 2, saha: "Design" },
  { ad: "Nazim", soyad: "İmanov", maas: 1700, yas: 35, staj: 10, saha: "Backend" },
  { ad: "Cavidan", soyad: "Əlizadə", maas: 1200, yas: 28, staj: 5, saha: "Data Science" },
  { ad: "Röyal", soyad: "Zamanov", maas: 1300, yas: 29, staj: 6, saha: "QA" },
  { ad: "Səməd", soyad: "Vəliyev", maas: 1050, yas: 26, staj: 3, saha: "Frontend" },
  { ad: "Ülvi", soyad: "Cəfərov", maas: 1500, yas: 32, staj: 8, saha: "Backend" },
  { ad: "Şamil", soyad: "Bədəlov", maas: 1100, yas: 27, staj: 4, saha: "Mobile" },
  { ad: "Etibar", soyad: "Şahverdiyev", maas: 1600, yas: 34, staj: 9, saha: "DevOps" },
  { ad: "Adil", soyad: "Vahabov", maas: 970, yas: 24, staj: 2, saha: "Design" },
  { ad: "Elgiz", soyad: "Bayramov", maas: 1400, yas: 30, staj: 6, saha: "Data Science" },
  { ad: "Zakir", soyad: "Qurbanov", maas: 1300, yas: 28, staj: 5, saha: "Frontend" },
  { ad: "Faiq", soyad: "Məlikov", maas: 1250, yas: 27, staj: 4, saha: "QA" },
  { ad: "Togrul", soyad: "Mustafayev", maas: 1500, yas: 33, staj: 8, saha: "Backend" },
  { ad: "Ümid", soyad: "Əkbərov", maas: 1000, yas: 25, staj: 3, saha: "Mobile" },
  { ad: "Fikrət", soyad: "Şirinov", maas: 1350, yas: 29, staj: 6, saha: "Frontend" },
  { ad: "Yusif", soyad: "Mehdiyev", maas: 1450, yas: 31, staj: 7, saha: "DevOps" },
  { ad: "Rüfət", soyad: "Nəcəfov", maas: 950, yas: 23, staj: 2, saha: "Design" },
  { ad: "Bəxtiyar", soyad: "Salmanov", maas: 1700, yas: 35, staj: 10, saha: "Backend" },
  { ad: "Vaqif", soyad: "Yusubov", maas: 1200, yas: 28, staj: 5, saha: "Data Science" },
  { ad: "Şahin", soyad: "Hacıyev", maas: 1300, yas: 29, staj: 6, saha: "QA" }
]

function App() {
  const saheler=Array.from(new Set(arr.map(item=>item.saha)))
  saheler.unshift('Sahə seç','Söndür');

  const [data,setData]=useState([...arr]);
  

  const [[az,cox],setmaasSortStatus]=useState([false,false]);
  const [[tecrube,random],setBiriniGosterStatus]=useState([false,false]);
  const [[balaca,mid,boyuk],setYasSortStatus]=useState([false,false,false]);
  const [axtarArr,setAxtarArr]=useState([...arr]);//чтобы copy и axtarArr не ссылались на один и тот же массив
  const [copy,setCopy]=useState([...axtarArr]); //useState не отслеживает зависимости между состояниями. 
  const [selOpt,setOpt]=useState('Sahə seç');

  const [ad,setAd]=useState('')
  const [soyad,setSoyad]=useState('')
  const [maas,setMaas]=useState('')
  const [staj,setStaj]=useState('')
  const [yas,setYas]=useState('')
  const [saha,setSahe]=useState('')
//////////////////////////////////////////////////////////////////////
  function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  function tupurduyunuYalaMaas(arr){
    if(az) return arr.sort((a,b)=>a.maas-b.maas)
    else if(cox) return arr.sort((a,b)=>b.maas-a.maas)
    else return arr
  }
  function tupurduyunuYalaYas(arr){
    if(balaca){
      return arr.filter(item=>item.yas<=25)
    }else if(mid){
      return arr.filter(item=>item.yas>=26&&item.yas<=30)
    }else if(boyuk){
      return arr.filter(item=>item.yas>=31)
    }else{
      return arr
    }
  }
  function tupurduyunuYalaSahe(arr){
    if(selOpt!='Sahə seç' && selOpt!='Söndür') return arr.filter(item=>item.saha==selOpt)
    else return arr
  }
  function tupurduyunuYalaBiriniGoster(arr){
    if(tecrube){
      const stajlar=arr.map(item=>item.staj)
      return arr.filter(item=>item.staj==Math.max(...stajlar))
    }else return arr
  }
  function tupurduyunuYalaRandomiGoster(arr){
    if(random){
      if(arr.length==0) return []
      else{
        const ind=rnd(0,arr.length-1)
        return [arr[ind]]
      }
    }else return arr
  }
////////////////////////////////////////////////////////////////////
  function axtar(e){
    const text=e.target.value;
    const tezeAd=data.filter(item=>item.ad.toLocaleLowerCase('az-AZ').startsWith(text.toLocaleLowerCase('az-AZ')));
    const tezeSoy=data.filter(item=>item.soyad.toLocaleLowerCase('az-AZ').startsWith(text.toLocaleLowerCase('az-AZ')));
    const yeniArr=[...tezeAd,...tezeSoy]
    setAxtarArr([...yeniArr])
    setCopy([...tupurduyunuYalaRandomiGoster(tupurduyunuYalaMaas(tupurduyunuYalaBiriniGoster(tupurduyunuYalaYas(tupurduyunuYalaSahe(yeniArr)))))]);
  }
  function maasaGoreSort(arg){
    if(!random){
        if(arg==0 && az || arg==1&&cox){
          setmaasSortStatus([false,false])
          setCopy([...tupurduyunuYalaRandomiGoster(tupurduyunuYalaBiriniGoster(tupurduyunuYalaYas(tupurduyunuYalaSahe(axtarArr))))])
        }
        else if(arg==0){
          setmaasSortStatus([true,false])
          setCopy([...copy.sort((a,b)=>a.maas-b.maas)])
        }else{
          setmaasSortStatus([false,true])
          setCopy([...copy.sort((a,b)=>b.maas-a.maas)])
        }
    }else alert('Randomu axtarirsan eee')
  }
  
  function yasDeyis(arg){
    if(arg==0 && balaca || arg==1&&mid || arg==2&&boyuk){
      setYasSortStatus([false,false,false])
      setCopy([...tupurduyunuYalaRandomiGoster(tupurduyunuYalaMaas(tupurduyunuYalaBiriniGoster(tupurduyunuYalaSahe(axtarArr))))])
    }
    else if(arg==0){
      setYasSortStatus([true,false,false])
      const yeniArr=[...axtarArr.filter(item=>item.yas<=25)]
      setCopy([...tupurduyunuYalaRandomiGoster(tupurduyunuYalaMaas(tupurduyunuYalaBiriniGoster(tupurduyunuYalaSahe(yeniArr))))])
    }
    else if(arg==1){
      setYasSortStatus([false,true,false])
      const yeniArr=[...axtarArr.filter(item=>item.yas>=26&&item.yas<=30)]
      setCopy([...tupurduyunuYalaRandomiGoster(tupurduyunuYalaMaas(tupurduyunuYalaBiriniGoster(tupurduyunuYalaSahe(yeniArr))))])
    }
    else if(arg==2){
      setYasSortStatus([false,false,true])
      const yeniArr=[...axtarArr.filter(item=>item.yas>=31)]
      setCopy([...tupurduyunuYalaRandomiGoster(tupurduyunuYalaMaas(tupurduyunuYalaBiriniGoster(tupurduyunuYalaSahe(yeniArr))))])
    }
  }
  function saheDeyis(e){
    const opt=e.target.value;
    setOpt(opt)
    const yeniAr=[...axtarArr.filter(item=>item.saha==opt)]
    if(opt=='Söndür') setCopy([...tupurduyunuYalaRandomiGoster(tupurduyunuYalaMaas(tupurduyunuYalaBiriniGoster(tupurduyunuYalaYas(axtarArr))))])
    else setCopy([...tupurduyunuYalaRandomiGoster(tupurduyunuYalaMaas(tupurduyunuYalaBiriniGoster(tupurduyunuYalaYas(yeniAr))))])
  }
  function biriniGosterDeyis(arg){
    if(arg==0&&tecrube || arg==1&&random){
       setBiriniGosterStatus([false,false])
       setCopy([...tupurduyunuYalaMaas(tupurduyunuYalaSahe(tupurduyunuYalaYas(axtarArr)))])
    }
    else if(arg==0){
      setBiriniGosterStatus([true,false])
      const stajlar=tupurduyunuYalaSahe(tupurduyunuYalaYas(axtarArr)).map(item=>item.staj)
      const yeniAr=tupurduyunuYalaSahe(tupurduyunuYalaYas(axtarArr)).filter(item=>item.staj==Math.max(...stajlar))
      setCopy([...tupurduyunuYalaMaas(yeniAr)])
    }else{
      const ar=tupurduyunuYalaSahe(tupurduyunuYalaYas(axtarArr))
      if(ar.length==0) alert('Bu filtere uygun data yoxdur')
      else{
        setmaasSortStatus([false,false])
        setBiriniGosterStatus([false,true])
        const ind=rnd(0,ar.length-1)
        setCopy([ar[ind]])
      }
    }
  }
  function elaveEt(){
    const elem={ad,soyad,maas,yas,staj,saha};
    setData([elem,...data])
    setAxtarArr(tupurduyunuYalaMaas(tupurduyunuYalaSahe(tupurduyunuYalaYas([elem,...axtarArr])))) 
    setCopy(tupurduyunuYalaMaas(tupurduyunuYalaSahe(tupurduyunuYalaYas([elem,...copy]))))
    setSahe('');setStaj('');setYas('');setMaas('');setAd('');setSoyad('');
  }

  return (
    <div className='w-[95%] m-auto! bg-light h-[95%] flex flex-col gap-[10px] text-dark border border-darker rounded-[10px] shadow-dark p-[15px]!'>
      <h1 className="font-[600] text-[30px] ">İşçilər Paneli</h1>
      <div className="flex flex-col desk:flex-row h-full gap-[20px]">
        <div className="desk1:w-[45%] desk:w-[50%] w-full flex flex-col gap-[10px]">
          <div id="axtaris" className="w-full flex flex-col gap-[10px]">
            <h1 className="font-[500] text-[20px]">Ad/Soyad ilə axtarış et</h1>
            <input 
              onChange={axtar}
              type="text" className="bg-white outline-none p-[5px]! rounded-[6px] shadow-herTerefliLil" />
          </div>
          <div id="filtrlar" className="w-full flex flex-col gap-[10px]">
            <h1 className="font-[500] text-[20px]">Filtr</h1>
            <div className="max-mid:flex-col max-mid:gap-[20px] shadow-herTerefliLil bg-white rounded-[15px] flex justify-between p-[10px]!">
              <div className="flex items-start flex-col gap-[10px]">
                <div className="flex items-center gap-[20px]">
                  <button onClick={()=>{maasaGoreSort(0)}} className={`${az? "text-white bg-darker": "text-darker bg-white"} cursor-pointer py-[5px]! px-[15px]! border-darker border-[2px] rounded-[10px] font-bold text-[16px] text-nowrap transition-all duration-200 ease-in-out hover:shadow-herTerefliLil hover:scale-[1.01] desk:max-desk1:px-[8px]!`}>A-Z</button>
                  <button onClick={()=>{maasaGoreSort(1)}} className={`${cox? "text-white bg-darker": "text-darker bg-white"} cursor-pointer py-[5px]! px-[15px]! border-darker border-[2px] rounded-[10px] font-bold text-[16px] text-nowrap transition-all duration-200 ease-in-out hover:shadow-herTerefliLil hover:scale-[1.01] desk:max-desk1:px-[8px]!`}>Z-A</button>
                </div>
                <div className="flex flex-wrap items-center gap-[20px]">
                  <button onClick={()=>{yasDeyis(0)}} className={`${balaca? "text-white bg-darker": "text-darker bg-white"} cursor-pointer py-[5px]! px-[15px]! border-darker border-[2px] rounded-[10px] font-bold text-[16px] text-nowrap transition-all duration-200 ease-in-out hover:shadow-herTerefliLil hover:scale-[1.01] desk:max-desk1:px-[8px]!`}>18-25</button>
                  <button onClick={()=>{yasDeyis(1)}} className={`${mid? "text-white bg-darker": "text-darker bg-white"} cursor-pointer py-[5px]! px-[15px]! border-darker border-[2px] rounded-[10px] font-bold text-[16px] text-nowrap transition-all duration-200 ease-in-out hover:shadow-herTerefliLil hover:scale-[1.01] desk:max-desk1:px-[8px]!`}>26-30</button>
                  <button onClick={()=>{yasDeyis(2)}} className={`${boyuk? "text-white bg-darker": "text-darker bg-white"} cursor-pointer py-[5px]! px-[15px]! border-darker border-[2px] rounded-[10px] font-bold text-[16px] text-nowrap transition-all duration-200 ease-in-out hover:shadow-herTerefliLil hover:scale-[1.01] desk:max-desk1:px-[8px]!`}>31+</button>
                </div>
                <div className="flex items-center gap-[20px] max-desk1:items-start max-desk1:flex-col">
                  <button onClick={()=>{biriniGosterDeyis(0)}} className={`${tecrube? "text-white bg-darker": "text-darker bg-white"} cursor-pointer py-[5px]! px-[15px]! border-darker border-[2px] rounded-[10px] font-bold text-[16px] text-nowrap transition-all duration-200 ease-in-out hover:shadow-herTerefliLil hover:scale-[1.01]`}>Ən təcrübəlini göstər</button>
                  <button onClick={()=>{biriniGosterDeyis(1)}} className={`${random? "text-white bg-darker": "text-darker bg-white"} cursor-pointer py-[5px]! px-[15px]! border-darker border-[2px] rounded-[10px] font-bold text-[16px] text-nowrap transition-all duration-200 ease-in-out hover:shadow-herTerefliLil hover:scale-[1.01]`}>Random birini göstər</button>
                </div>
              </div>
              <div className="self-start">
                <select
                  value={selOpt}
                  onChange={saheDeyis}
                  className="outline-none z-2 p-[10px]! border-[2px] rounded-[10px] transition-all duration-200 ease-in-out hover:shadow-herTerefliLil hover:scale-[1.01] cursor-pointer">
                    {
                      saheler.map((item,i)=> i==0 ? <option key={i} disabled>{item}</option> : <option key={i}>{item}</option>)
                    }
                </select>
              </div>
            </div>
          </div>
          <div id="elaveEt" className="w-full flex flex-col gap-[10px]">
            <h1 className="font-[500] text-[20px]">Yeni işçi elavə et</h1>
            <div className="flex flex-col items-center gap-[15px] max-desk2:p-[10px]! p-[20px]! shadow-herTerefliLil bg-white rounded-[15px]">
              <div className="flex flex-wrap justify-center gap-[10px] items-center">
                <div className="flex items-center gap-[5px]">
                  <h1 className="font-[500] text-nowrap text-[16px]">Ad:</h1>
                  <input value={ad} onChange={(e)=>{setAd(e.target.value)}} type="text" className="max-w-[100px] bg-white outline-none p-[2px]! rounded-[6px] shadow-herTerefliLil" />
                </div>
                <div className="flex items-center gap-[5px]">
                  <h1 className="font-[500] text-nowrap text-[16px]">Soyad:</h1>
                  <input value={soyad} onChange={(e)=>{setSoyad(e.target.value)}} type="text" className="max-w-[100px] bg-white outline-none p-[2px]! rounded-[6px] shadow-herTerefliLil" />
                </div>
                <div className="flex items-center gap-[5px]">
                  <h1 className="font-[500] text-nowrap text-[16px]">Maaş:</h1>
                  <input value={maas} onChange={(e)=>{setMaas(e.target.value)}} type="number" className="max-w-[100px] bg-white outline-none p-[2px]! rounded-[6px] shadow-herTerefliLil" />
                </div>
                <div className="flex items-center gap-[5px]">
                  <h1 className="font-[500] text-nowrap text-[16px]">Yaş:</h1>
                  <input value={yas} onChange={(e)=>{setYas(e.target.value)}} type="number" className="max-w-[100px] bg-white outline-none p-[2px]! rounded-[6px] shadow-herTerefliLil" />
                </div>
                <div className="flex items-center gap-[5px]">
                  <h1 className="font-[500] text-nowrap text-[16px]">Staj:</h1>
                  <input value={staj} onChange={(e)=>{setStaj(e.target.value)}} type="number" className="max-w-[100px] bg-white outline-none p-[2px]! rounded-[6px] shadow-herTerefliLil" />
                </div>
                <div className="flex items-center gap-[5px]">
                  <h1 className="font-[500] text-nowrap text-[16px]">Sahə:</h1>
                  <input value={saha} onChange={(e)=>{setSahe(e.target.value)}} type="text" className="max-w-[100px] bg-white outline-none p-[2px]! rounded-[6px] shadow-herTerefliLil" />
                </div>
              </div>
              <button onClick={elaveEt} className={`hover:bg-darker hover:text-white cursor-pointer py-[5px]! px-[15px]! border-darker border-[2px] rounded-[10px] font-bold text-[16px] text-nowrap transition-all duration-200 ease-in-out hover:shadow-herTerefliLil hover:scale-[1.01] desk:max-desk1:px-[8px]!`}>Əlavə et</button>
            </div>
          </div>
        </div>
        <div id="siyahi" className="overflow-hidden flex flex-col gap-[10px] items-center desk1:w-[55%] desk:w-[50%] w-full rounded-[15px] shadow-herTerefli h-full bg-white">
            <div className="w-full text-white bg-dark flex items-center justify-between">
              <h1 className="w-[16.6%] text-[14px] text-center font-[600]">Ad</h1>
              <h1 className="w-[16.6%] text-[14px] text-center font-[600]">Soyad</h1>
              <h1 className="w-[16.6%] text-[14px] text-center font-[600]">Maaş</h1>
              <h1 className="w-[16.6%] text-[14px] text-center font-[600]">Yaş</h1>
              <h1 className="w-[16.6%] text-[14px] text-center font-[600]">Staj</h1>
              <h1 className="w-[16.6%] text-[14px] text-center font-[600]">Sahə</h1>
            </div>
            <div id="scr" className="w-full flex flex-col max-h-[75vh] overflow-y-auto">
                {
                  copy.map((item,i)=>{
                    return <div key={i} className="w-full text-[12px] border-b font-[600] flex items-center justify-between py-[5px]!">
                              <h1 className="w-[16.6%] text-wrap text-center">{item.ad}</h1>
                              <h1 className="w-[16.6%] text-wrap text-center">{item.soyad}</h1>
                              <h1 className="w-[16.6%] text-wrap text-center">{item.maas} AZN</h1>
                              <h1 className="w-[16.6%] text-wrap text-center">{item.yas}</h1>
                              <h1 className="w-[16.6%] text-wrap text-center">{item.staj} il</h1>
                              <h1 className="w-[16.6%] text-wrap text-center">{item.saha}</h1>
                            </div>
                  })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
