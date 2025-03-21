

const AboutMe = () => {
    return (
        <div className="content">
            <div className="resume-icons flex flex-row items-center mt-8">
                <div className="flex flex-row items-center p-2">
                    <img src={new URL('../assets/javascript.png', import.meta.url).href} style={{ width: 100 }} />
                    <img src={new URL('../assets/react.png', import.meta.url).href} style={{ width: 100 }} />
                    <img src={new URL('../assets/redux.png', import.meta.url).href} style={{ width: 100 }} />
                </div>
                <div className="flex flex-row items-center p-2">
                    <img src={new URL('../assets/express.jpg', import.meta.url).href} style={{ width: 100 }} />
                    <img src={new URL('../assets/node.png', import.meta.url).href} style={{ width: 100 }} />

                </div>
                <div className="flex flex-row items-center p-2">
                    <img src={new URL('../assets/mongodb.png', import.meta.url).href} style={{ width: 100 }} />
                    
                </div>
                <div className="flex flex-row items-center p-2"> 
                    <img src={new URL('../assets/html.png', import.meta.url).href} style={{ width: 100 }} />
                    <img src={new URL('../assets/css.png', import.meta.url).href} style={{ width: 100 }} />
                    <img src={new URL('../assets/bootstrap.png', import.meta.url).href} style={{ width: 100 }} />
                    <img src={new URL('../assets/tailwind.jpg', import.meta.url).href} style={{ width: 100 }} />
                </div>
            </div>


        </div>

    )
}

export default AboutMe