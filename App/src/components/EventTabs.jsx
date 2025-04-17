import TabComponent from "./TabComponent";


export function EventTabs() {
  return (
    <>
        <TabComponent 
        tabStyle ="!bg-red-300"
        content={
            { 
            headers: [
                {title:"1234"},
                {title:"21"},
            ],
            articles: [
                {value:<div>aaddda</div>},
                {value:<div>aaa</div>},
            ], 
            }
        } 
        />
    </>
  )
}