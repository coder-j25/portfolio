import { Link } from "react-router-dom"
import recipe from "../assets/recipe_app_preview.jpg"

const Home = () => {
    return (
        <>
         

        <div className="pt-12"> 
<div className="flex flex-col items-center bg-white md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-16 m-auto">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={new URL('../assets/hanson_avatar.png', import.meta.url).href} alt="avatar" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h1  className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Justine&#233; Hanson</h1>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MERN Stack Developer</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I like to problem solve and design solutions which leave an impact...<span><Link to="/aboutMe" className="introSpan">About Me</Link></span></p>
        
    </div>
</div>
<br/>
<div className="project-section border-t-4 border-zinc-50 m-16">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-8">Projects</h5>

</div>
</div>   
        </>
    )
}

export default Home