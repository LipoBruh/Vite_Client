
import { TabItem, Tabs } from "flowbite-react";
import { Label,TextInput } from "flowbite-react";
import { FaWindowMinimize } from "react-icons/fa";

export function DiscordTabs() {
  return (
    <Tabs aria-label="Pills" variant="pills" className="!text-slate-700 ">

      <TabItem active title="Rejoindre le Discord" className="" >

        
        <div className="text-center flex flex-col justify-around" style={{height:"60vh"}}>
            
            <div className="bg-white mx-4 rounded-md mb-3">
                <h3 className=" bg-blue-500  p-1 rounded-md text-2xl font-bold dark:text-white drop-shadow-md">Rejoindre le discord:</h3>
                <img src="/qr.png" alt="QR code" className="m-auto rounded-sm"></img>
                <p>Discord Invite URL : <a href="https://www.discord.gg/zxXzrFyz4c" className="text-blue-400"> (LINK) </a> </p>
            </div>
            
            <div className="bg-white mx-4 rounded-md">
                <h3 className="bg-blue-500 p-1 rounded-md text-2xl font-bold dark:text-white drop-shadow-sm">Inscription intégrée au Discord</h3>
                <img src="/login.gif" alt="QR code" className="m-auto rounded-sm w-60 object-scale-down my-4"></img>
                <p className="font-sans">Si vous êtes un étudiant de l'Université de Montréal ou de ses écoles affiliées, vous n'avez qu'à saisir votre nom et matricule pour rejoindre le regroupement !</p>

            </div>
        </div>
      </TabItem>


      <TabItem title="Memes">
      <div className="text-center flex flex-col justify-around" style={{height:"60vh"}}>
            
            <div className="bg-white mx-4 rounded-md mb-3">
                <h3 className=" bg-blue-500  p-1 rounded-md text-2xl font-bold dark:text-white drop-shadow-md">Nouvelles soumissions:</h3>
                <img src="/qr.png" alt="QR code" className="m-auto max-w-90 rounded-sm m"></img>
                <p>Soumis par </p>
            </div>

        </div>
      </TabItem>


      <TabItem title="Chat">
      <div className="text-center flex flex-col justify-around" style={{height:"60vh"}}>
            
            <div className="bg-white mx-4 rounded-md mb-3">
                <Label>
                <TextInput></TextInput>
                </Label>
            </div>

        </div>
      </TabItem>


    </Tabs>
  );
}
