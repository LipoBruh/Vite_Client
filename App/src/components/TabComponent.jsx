import { TabItem, Tabs } from "flowbite-react";
import React from 'react'
import {  createTheme, ThemeProvider } from "flowbite-react";
export default function TabComponent({tabStyle="",content,}) {



    const mainTheme = createTheme({
        button: {
          color: {
            primary: "bg-blue-500 hover:bg-blue-600",
          },
          size: {
            lg: "px-6 py-3",
          },
        },
      });


    function render(){
        let headers = content.headers
        let articles = content.articles.map((v,key)=>{return v.value})

        return headers.map((obj,key)=>{
            console.log(articles)
            return (
                <TabItem
                    ref = ""
                    title={obj.title?obj.title:key+"" }
                    //variant={obj.variant?obj.variant:"default"} //Variants : pill, fullWidth, underline, default
                    className={obj.style? obj.style+" "+tabStyle : " "+tabStyle}
                    key={key}
                    active={key==0} 
                >
                     {articles[key]}
                </TabItem>
            )
        })
    }

    let components = render()

  return (

    <ThemeProvider theme={mainTheme}>
        <Tabs theme={mainTheme.button}>
            {components}
        </Tabs>
    </ThemeProvider>
  )
}
